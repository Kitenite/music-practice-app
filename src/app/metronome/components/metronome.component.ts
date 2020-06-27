import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Custom imports
import { TimeSyncService } from '../services/time-sync.service'
import { NextBeat } from '../models/next-beat'
import { MetronomeAudioService } from '../services/metronome-audio.service';
import { MetronomePlayer } from '../models/metronome-player';
import { PlayerState } from '../models/player-state-enum'

@Component({
  selector: 'app-metronome',
  templateUrl: './metronome.component.html',
  styleUrls: ['./metronome.component.scss']
})

export class MetronomeComponent implements OnInit {
  // Variables
  private ngUnsubscribe = new Subject();
  playerState:MetronomePlayer = new MetronomePlayer();
  clientCount:number = 1;

  constructor(
    private timeSyncService:TimeSyncService,
    public metronomeAudio:MetronomeAudioService
  ) {}

  ngOnInit(): void {
    this.metronomeAudio.init();
    this.timeSyncService.subscribeNextBeat().pipe(takeUntil(this.ngUnsubscribe)).subscribe(nextBeat => this.nextBeatReceived(nextBeat));
    this.timeSyncService.subscribeClientCount().pipe(takeUntil(this.ngUnsubscribe)).subscribe(clientCount => this.clientCount = clientCount.count)
  }

  ngOnDestroy() {
    if (this.metronomeAudio.isPlaying){
      this.metronomeAudio.play()
      this.playerState.state = PlayerState.Paused;
    }
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  nextBeatReceived(data:NextBeat){
    console.log(data)
    this.playerState.tempo = this.metronomeAudio.tempo = data.tempo
    if (this.playerState.state == PlayerState.Paused){
      return;
    }
    var nextBeat = data.nextBeat
    var timeDifference = nextBeat - Date.now();
    while (timeDifference < 1){
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
    this.metronomeAudio.toggleResolution();
  }

}
