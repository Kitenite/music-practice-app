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
    private metronomeAudio:MetronomeAudioService
  ) {}

  ngOnInit(): void {
    this.metronomeAudio.init();
    this.timeSyncService.subscribeNextBeat().subscribe(nextBeat => this.nextBeatReceived(nextBeat));
  }


  nextBeatReceived(data:NextBeat){
    if (this.playerState.state != PlayerState.Waiting){
      return
    }
    this.updateTempo(data.tempo)
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
    console.log("play")
    // Activate playing onclick, necessary for browsers
    if (this.playerState.firstPlay){
      this.metronomeAudio.play()
      this.metronomeAudio.play()
      this.playerState.firstPlay = false;
    }

    // Request next beat from server
    if(!this.metronomeAudio.isPlaying){
      this.timeSyncService.requestNextBeat();
      // Angular way of change this based on waiting for beat 
      // $("#play-button").attr("src","/images/wait.png");
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
    console.log("sync")
  }

  sendTempo(){
    console.log("sendTempo")
  }

  tempoChange(amount:number){
    console.log("tempo change", amount)
  }

  toggleResolution(){
    console.log("toggle resolution")
  }

  toggleTempoButton(){
    console.log("toggle tempo button")
  }

  updateTempo(tempo){

  }

}
