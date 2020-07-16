import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

let RecordRTC = require('recordrtc/RecordRTC.min');

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

  stopRecording(callback){
    this.stream.getAudioTracks().forEach(track => track.stop());
    this.stream.getVideoTracks().forEach(track => track.stop());
    this.recordRTC.stopRecording(callback);
  }

  startRecording(stream: MediaStream) {
    var options = {
      mimeType: 'video/webm'
    };
    this.stream = stream;
    this.recordRTC = RecordRTC(stream, options);
    this.recordRTC.startRecording();
  }



  downloadVideo(){
    this.recordRTC.save('video.webm');
  }
}
