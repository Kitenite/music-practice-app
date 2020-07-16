import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
let RecordRTC = require('recordrtc/RecordRTC.min');

@Component({
  selector: 'record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements AfterViewInit{

  private stream: MediaStream;
  private recordRTC: any;

  @ViewChild('video') video;

  constructor( private sanitizer:DomSanitizer) {
    // Do stuff
  }

  ngAfterViewInit() {
    // set the initial state of the video
    let video:HTMLVideoElement = this.video.nativeElement;
    video.muted = false;
    video.controls = true;
    video.autoplay = false;
  }

  toggleControls() {
    let video: HTMLVideoElement = this.video.nativeElement;
    video.muted = !video.muted;
    video.controls = !video.controls;
    video.autoplay = !video.autoplay;
  }

  successCallback(stream: MediaStream) {

    var options = {
      mimeType: 'video/webm'
    };
    this.stream = stream;
    this.recordRTC = RecordRTC(stream, options);
    this.recordRTC.startRecording();
    let video: HTMLVideoElement = this.video.nativeElement;
    video.srcObject = stream;
    this.toggleControls();
  }

  errorCallback() {
    //handle error here
  }

  startRecording() {
    let mediaConstraints = {
      video: true,
      audio: true
    };
    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }

  stopRecording() {
    let recordRTC = this.recordRTC;
    recordRTC.stopRecording(this.processVideo.bind(this));
    let stream = this.stream;
    stream.getAudioTracks().forEach(track => track.stop());
    stream.getVideoTracks().forEach(track => track.stop());
  }


  processVideo(audioVideoWebMURL) {
    let video: HTMLVideoElement = this.video.nativeElement;
    video.pause();
    video.srcObject = null;
    video.src = audioVideoWebMURL
    video.load();
    this.toggleControls();
  }

  download() {
    this.recordRTC.save('video.webm');
  }
}