import { Component } from '@angular/core';
import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';
import { AudioContext } from 'angular-audio-context';

@Component({
  selector: 'app-tuner',
  templateUrl: './tuner.component.html',
  styleUrls: ['./tuner.component.scss']
})
export class TunerComponent {

  analyzer:any;
  frequencyData;
  recordInterval;

  title:string = 'micRecorder';
  record:any;
  recording:boolean = false;
  blobUrl:string;
  error:any;

  constructor(
    private domSanitizer: DomSanitizer,
    private audioContext: AudioContext
    ) {}

  sanitize(blobUrl: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(blobUrl);
  }

  initiateRecording() {
    this.audioContext.resume()
    let mediaConstraints = {
      video: false,
      audio: true
    };
    navigator.mediaDevices.getUserMedia(mediaConstraints).then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }
 
  successCallback(stream:MediaStream) {
    var options = {
      mimeType: "audio/wav",
      numberOfAudioChannels: 1,
      sampleRate: 44100,
    };
    //Start Actuall Recording
    var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
    
    this.record = new StereoAudioRecorder(stream, options);
    this.record.record();
    this.analyzeStream(stream);
    this.recording = true;
    console.log("recording")
    this.recordInterval = setInterval(()=>{
      this.analyzer.getByteFrequencyData(this.frequencyData);
      console.log(this.frequencyData)
    }, 1000);
  }

  analyzeStream(stream:MediaStream){
    let source = this.audioContext.createMediaStreamSource(stream)
    this.analyzer = this.audioContext.createAnalyser();
    this.analyzer.fftSize = 64;
    source.connect(this.analyzer);
    this.frequencyData = new Uint8Array(this.analyzer.frequencyBinCount);
  }

  

  stopRecording() {
    clearInterval(this.recordInterval);
    this.record.stop(this.processRecording.bind(this));
    this.recording = false;
  }

  processRecording(blob) {
    this.blobUrl = URL.createObjectURL(blob);
    console.log("blob: ", blob);
    console.log("blobUrl : ", this.blobUrl);
  }

  errorCallback(error) {
    this.error = 'Can not play audio in your browser';
    console.log(this.error)
  }
}