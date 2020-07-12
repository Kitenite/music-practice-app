// Largely adapted from https://github.com/cwilso/PitchDetect

import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { MediaHandlerService } from '../../shared/services/media-handler.service'
import { AudioAnalyzerService } from '../services/audio-analyzer.service';
import * as musicalNotes from '../../../assets/musicalNotes.json'
import { MusicalNote } from '../../shared/models/musical-notes'

@Component({
  selector: 'app-tuner',
  templateUrl: './tuner.component.html',
  styleUrls: ['./tuner.component.scss']
})
export class TunerComponent implements OnInit, OnDestroy {

  // Canvas
  @ViewChild('canvas', { static: true })
  private canvas: ElementRef<HTMLCanvasElement>;  
  private ctx: CanvasRenderingContext2D;

  // Recording state
  recording:boolean = false;

  // Note constants
  minNote:number = 0;
  maxNote:number = 1046;
  acceptableDetune:number  = 5;

  picking:boolean = false;

  // Analyzer
  notes:[MusicalNote] =  (musicalNotes as any).default;
  targetHertz = 0;
  targetNoteIndex = 0;
  animationFrame;
  pitch:number = 0;
  detuneInt:number = 0;
  note:string = "--";
  detune:string = "--"
  detuneColor:string = "grey";

  constructor(
    private mediaHandlerService:MediaHandlerService,
    private audioAnalyzerService:AudioAnalyzerService
  ) {}

  ngOnInit(){
    this.ctx = this.canvas.nativeElement.getContext('2d');
  }

  ngOnDestroy(){
    this.mediaHandlerService.stopRecording();
  }

  initiateRecording() {
    let mediaConstraints = {
      video: false,
      audio: true
    };
    this.mediaHandlerService.initMedia(mediaConstraints).then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }
 
  successCallback(stream:MediaStream) {
    var options = {
      mimeType: "audio/wav",
      numberOfAudioChannels: 1,
      sampleRate: 44100,
    };
    this.mediaHandlerService.initAnalyzer(stream)
    this.updatePitch();
    this.recording = true;
  }

  stopRecording() {
    cancelAnimationFrame(this.animationFrame)
  }


  errorCallback(error) {
    console.log(error)
    alert(error)
  }


  updatePitch() {
    var freq = this.mediaHandlerService.getUpdatedFrequency();
    var ac = this.audioAnalyzerService.autoCorrelate(freq, this.mediaHandlerService.getSampleRate() );
    this.getPitch(ac);
    this.drawCanvas(freq)
    this.animationFrame = requestAnimationFrame(() => this.updatePitch())
  }

  drawCanvas(buf){
    var width:number = window.innerWidth*0.7;
    var height:number= window.innerHeight/4;
    var waveCanvas = this.ctx;
    waveCanvas.canvas.width  = width;
    waveCanvas.canvas.height = height;
    waveCanvas.clearRect(0,0,width,height);
    waveCanvas.strokeStyle = this.detuneColor;
    waveCanvas.lineWidth = 5;
    waveCanvas.beginPath();
    waveCanvas.moveTo(0,buf[0]);
    for (var i=1;i<width;i++) {
      waveCanvas.lineTo(i,(height/2)+(buf[i]*(height/2)));
    }
    waveCanvas.stroke();
  }

  getPitch(ac){
    if (ac != -1) {
      this.pitch = Math.round(ac);
      var noteInt =  this.audioAnalyzerService.noteFromPitch(this.pitch);
      this.note = this.notes[noteInt%12].name
      if (this.targetHertz == 0){
        this.detuneInt = this.audioAnalyzerService.centsOffFromPitch( this.pitch, noteInt );
      } else {
        this.detuneInt = this.pitch - this.targetHertz;
      }

      if (Math.abs(this.detuneInt) < this.acceptableDetune) {
        this.detune = "good";
        this.detuneColor = "#66E1B7"
      } else {
        if (this.detuneInt < 0){
          this.detune = "flat";
        } else{
          this.detune = "sharp";
        }
        this.detuneColor = "#FF7979"
      }
    }
  }
}