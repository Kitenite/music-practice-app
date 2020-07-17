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

  // Recording states
  isRecording: boolean = false;
  isPaused:boolean = false;
  isDone:boolean = false;

  constructor(
    private videoRecordingService:VideoRecordingService
  ) {}

  ngAfterViewInit() {
    // set the initial state of the video
    this.video = this.videoView.nativeElement;
    this.video.controls = false;
  }

  toggleRecording(){
    if (!this.isRecording){
      this.startRecording()
    } else {
      this.stopRecording()
    }
  }

  startRecording() {
    let mediaConstraints = {
      video: true,
      audio: true
    };
    this.videoRecordingService.initRecording(mediaConstraints).then((stream)=>{
      this.videoRecordingService.startRecording(stream);
      this.video.srcObject = stream;
      this.isRecording = true
    })
  }

  togglePauseRecording(){
    if (!this.isPaused){
      this.videoRecordingService.pauseRecording();
      this.isPaused = true;
    } else {
      this.videoRecordingService.resumeRecording();
      this.isPaused = false;
    }
  }


  stopRecording() {
    this.videoRecordingService.stopRecording(this.processVideo.bind(this));
    this.isRecording = false;
    this.isDone = true;
  }

  processVideo(audioVideoWebMURL) {
    this.video.pause();
    this.video.srcObject = null;
    this.video.src = audioVideoWebMURL;
    this.video.load();
    
  }

  downloadRecording() {
    this.videoRecordingService.downloadVideo();
  }

  uploadRecording(){
    console.log("Upload")
  }
}