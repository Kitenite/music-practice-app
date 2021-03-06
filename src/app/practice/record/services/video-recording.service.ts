import { Injectable } from '@angular/core';

let RecordRTC = require('recordrtc/RecordRTC.min');
// Need to redownload record RTC in package.json

@Injectable({
  providedIn: 'root'
})
export class VideoRecordingService {

  private stream: MediaStream;
  private recordRTC;

  constructor() { }

  initRecording(mediaConstraints):Promise<any>{
    return navigator.mediaDevices.getUserMedia(mediaConstraints)
  }

  startRecording(stream: MediaStream) {
    var options = {
      mimeType: 'video/webm'
    };
    this.stream = stream;
    this.recordRTC = RecordRTC(stream, options);
    this.recordRTC.startRecording();
  }

  pauseRecording(){
    this.recordRTC.pauseRecording();
  }

  resumeRecording(){
    this.recordRTC.resumeRecording();
  }

  stopRecording(callback){
    this.stream.getAudioTracks().forEach(track => track.stop());
    this.stream.getVideoTracks().forEach(track => track.stop());
    this.recordRTC.stopRecording(callback);
  }

  downloadVideo(){
    this.recordRTC.save('video.webm');
  }

  getBlob(){
    return this.recordRTC.getBlob();
  }
}