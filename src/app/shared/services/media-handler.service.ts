import { Injectable } from '@angular/core';
import { AudioContext } from 'angular-audio-context';

@Injectable({
  providedIn: 'root'
})
export class MediaHandlerService {
  private stream;
  constructor(
    private audioContext: AudioContext
  ) { }

  analyzer:any;
  frequencyData:any;

  initMedia(mediaConstraints){
    this.audioContext.resume()
    return navigator.mediaDevices.getUserMedia(mediaConstraints)
  }

  initAnalyzer(stream){
    this.stream = stream;
    let source = this.audioContext.createMediaStreamSource(stream)
    this.analyzer = this.audioContext.createAnalyser();
    source.connect(this.analyzer);
    this.frequencyData =  new Float32Array(this.analyzer.frequencyBinCount);
  }

  getSampleRate(){
    return this.audioContext.sampleRate;
  }

  getUpdatedFrequency(){
    this.analyzer.getFloatTimeDomainData(this.frequencyData);
    return this.frequencyData;
  }

  stopRecording(){
    if (this.stream) {
      this.stream.getTracks().forEach(function(track) {
        track.stop();
      });
    }
  }
}
