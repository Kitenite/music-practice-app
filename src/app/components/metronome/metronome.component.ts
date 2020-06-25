import { Component, OnInit } from '@angular/core';

import { TimeSyncService } from '../../services/time-sync.service'
import { NextBeat } from '../../models/next-beat'
import { MetronomeAudioService } from 'src/app/metronome-audio.service';
import { MetronomePlayer } from 'src/app/models/metronome-player';
import { PlayerState } from 'src/app/models/player-state-enum'

@Component({
  selector: 'app-metronome',
  templateUrl: './metronome.component.html',
  styleUrls: ['./metronome.component.scss']
})

export class MetronomeComponent implements OnInit {
  // Variables:
  playerState:MetronomePlayer = new MetronomePlayer()
  constructor(
    private timeSyncService:TimeSyncService,
    public metronomeAudio:MetronomeAudioService
  ) {}

  ngOnInit(): void {
    this.metronomeAudio.init();
    this.timeSyncService.subscribeNextBeat().subscribe(nextBeat => this.nextBeatReceived(nextBeat));
  }


  nextBeatReceived(data:NextBeat){
    console.log(data)
    this.playerState.tempo = this.metronomeAudio.tempo = data.tempo
    if (this.playerState.state == PlayerState.Paused){
      return;
    }
    var nextBeat = data.nextBeat
    var timeDifference = nextBeat - Date.now();
    while (timeDifference <= 0){
      nextBeat+=this.playerState.rate;
      timeDifference = nextBeat - Date.now();
    }

    setTimeout(()=>{
      this.metronomeAudio.play();
      if (!this.metronomeAudio.isPlaying){
        this.playBeat()
      }
    }, timeDifference);
  }



  // Media client handlers
  emitPlay(){
    // Activate playing onclick, necessary for browsers
    if (this.playerState.firstPlay){
      this.metronomeAudio.play()
      this.metronomeAudio.play()
      this.playerState.firstPlay = false;
    }

    // Request next beat from server
    if(!this.metronomeAudio.isPlaying){
      this.timeSyncService.requestNextBeat();
      this.playerState.state = PlayerState.Waiting;
    } else{
      this.playBeat() // Toggle play button
    }
  }

  playBeat(){
    this.metronomeAudio.play()
    if (this.metronomeAudio.isPlaying){
      this.playerState.state = PlayerState.Playing;
    } else {
      this.playerState.state = PlayerState.Paused;
    }
  }

  sync(){
    this.timeSyncService.syncDevices();
  }

  sendTempo(){
    console.log("sendTempo")
    this.timeSyncService.requestNewTempo(this.playerState.tempo)
  }

  toggleResolution(){
    console.log("toggle resolution")
  }

}
