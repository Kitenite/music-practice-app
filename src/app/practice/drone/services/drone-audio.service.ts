import { Injectable } from '@angular/core';
import { AudioContext } from 'angular-audio-context';

@Injectable({
  providedIn: 'root'
})
export class DroneAudioService {

  constructor(private audioContext: AudioContext) { }
  lastFreq:number
  lastOsc:any;
  octave:number = 1;
  minOctave:number = 0.5;
  maxOctave:number = 4;

  stopNote(){
    // temp vars
    if (this.lastOsc){
      this.lastOsc.stop()
      this.lastOsc = null
    }
  }

  playNote(freq:number=this.lastFreq){
    this.lastFreq = freq;
    this.stopNote();
    let osc = this.audioContext.createOscillator();
    this.lastOsc = osc;
    osc.connect(this.audioContext.destination);
    osc.frequency.value = freq*this.octave;
    osc.start(this.audioContext.currentTime);
  }

  changeOctave(multiplier:number){
    this.octave = Math.max(Math.min(this.octave*multiplier, this.maxOctave), this.minOctave)
    if (this.lastOsc){
      this.playNote()
    }
  }

}
