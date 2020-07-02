import { Component } from '@angular/core';
import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tuner',
  templateUrl: './tuner.component.html',
  styleUrls: ['./tuner.component.scss']
})
export class TunerComponent {

  title:string = 'micRecorder';
  record:any;
  recording:boolean = false;
  blobUrl:string;
  error:any;

  constructor(private domSanitizer: DomSanitizer) {}

  sanitize(blobUrl: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(blobUrl);
  }

  initiateRecording() {
    let mediaConstraints = {
      video: false,
      audio: true
    };
    navigator.mediaDevices.getUserMedia(mediaConstraints).then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }
 
  successCallback(stream) {
    var options = {
      mimeType: "audio/wav",
      numberOfAudioChannels: 1,
      sampleRate: 44100,
    };
    //Start Actuall Recording
    var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
    this.record = new StereoAudioRecorder(stream, options);
    this.record.record();
    this.recording = true;
    console.log("recording")
  }

  stopRecording() {
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