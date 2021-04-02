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
  wakeLock = null;


  isOnline = false;

  constructor(
    private timeSyncService:TimeSyncService,
    public metronomeAudio:MetronomeAudioService
  ) {}

  ngOnInit(): void {
    this.timeSyncService.subscribeConnect().pipe(takeUntil(this.ngUnsubscribe)).subscribe(event => console.log("Connect: "+event));

    this.timeSyncService.subscribeNextBeat().pipe(takeUntil(this.ngUnsubscribe)).subscribe(nextBeat => this.nextBeatReceived(nextBeat));
    this.timeSyncService.subscribeClientCount().pipe(takeUntil(this.ngUnsubscribe)).subscribe(clientCount => this.clientCount = clientCount.count)
    this.isOnline = navigator.onLine;
    this.requestWakeLock();
  }

  ngOnDestroy() {
    if (this.metronomeAudio.isPlaying){
      this.metronomeAudio.play()
      this.playerState.state = PlayerState.Paused;
    }
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
    this.releaseWakeLock();
  }

  async requestWakeLock(){
    if ('wakeLock' in navigator) {
      try {
        this.wakeLock = await (navigator as any).wakeLock.request('screen');
        console.log("Got wake lock")

      } catch (err) {
        console.log("Can't wake lock")
      }
    }
  }

  releaseWakeLock(){
    this.wakeLock.release()
      .then(() => {
        this.wakeLock = null;
    });
  }

  nextBeatReceived(data:NextBeat){
    this.playerState.tempo = this.metronomeAudio.tempo = data.tempo;
    this.playerState.rate = 60000/data.tempo;
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
      if (!navigator.onLine){
        console.log("Playing offline")
        this.playBeat()
      }
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
    this.timeSyncService.requestNewTempo(this.playerState.tempo)
    if (!navigator.onLine){
      this.metronomeAudio.tempo = this.playerState.tempo
    }
  }

  toggleResolution(){
    this.metronomeAudio.toggleResolution();
  }

}
