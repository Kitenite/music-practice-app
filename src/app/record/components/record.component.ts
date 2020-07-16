import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { VideoRecordingService } from '../services/video-recording.service'
@Component({
  selector: 'record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements AfterViewInit{

  @ViewChild('video') videoView;
  video:HTMLVideoElement;

  constructor(
    private videoRecordingService:VideoRecordingService
  ) {}

  ngAfterViewInit() {
    // set the initial state of the video
    this.video = this.videoView.nativeElement;
    this.video.muted = false;
    this.video.controls = true;
    this.video.autoplay = false;
  }

  toggleControls() {
    this.video.muted = !this.video.muted;
    this.video.controls = !this.video.controls;
    this.video.autoplay = !this.video.autoplay;
  }

  startRecording() {
    let mediaConstraints = {
      video: true,
      audio: true
    };
    this.videoRecordingService.initRecording(mediaConstraints).then((stream)=>{
      this.videoRecordingService.startRecording(stream);
      this.video.srcObject = stream;
      this.toggleControls();
    })
  }

  stopRecording() {
    this.videoRecordingService.stopRecording(this.processVideo.bind(this));
  }

  processVideo(audioVideoWebMURL) {
    this.video.pause();
    this.video.srcObject = null;
    this.video.src = audioVideoWebMURL;
    this.video.load();
    this.toggleControls();
  }

  download() {
    this.videoRecordingService.downloadVideo();
  }
}