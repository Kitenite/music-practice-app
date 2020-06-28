import { Injectable } from '@angular/core';
import { AudioContext } from 'angular-audio-context';

@Injectable({
  providedIn: 'root'
})
export class DroneAudioService {

  constructor(private _audioContext: AudioContext) { }

  lastOsc:any;

  playNote(freq:number){
    if (this.lastOsc){
      this.lastOsc.stop()
    }
    let osc = this._audioContext.createOscillator();
    this.lastOsc = osc;
    osc.connect(this._audioContext.destination);
    osc.frequency.value = freq;
    osc.start(this._audioContext.currentTime);
  }

  stopNote(){
    // temp vars
    if (this.lastOsc){
      this.lastOsc.stop()
    }
  }
}
