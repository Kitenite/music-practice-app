import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MediaHandlerService } from '../../shared/services/media-handler.service'
import { AudioAnalyzerService } from '../services/audio-analyzer.service';

@Component({
  selector: 'app-tuner',
  templateUrl: './tuner.component.html',
  styleUrls: ['./tuner.component.scss']
})
export class TunerComponent implements OnInit {

  // Canvas
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;  
  private ctx: CanvasRenderingContext2D;

  // Recording state
  recording:boolean = false;

  // Note constants
  minNote:number = 0;
  maxNote:number = 1046;

  // Analyzer
  animationFrame;
  pitch:number = 0;
  detuneInt:number = 0;
  note:string = "--";
  detune:string = "--"

  constructor(
    private mediaHandlerService:MediaHandlerService,
    private audioAnalyzerService:AudioAnalyzerService
  ) {}

  ngOnInit(){
    this.ctx = this.canvas.nativeElement.getContext('2d');
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

  // Pitch Detection
  noteStrings = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

  updatePitch() {
    var cycles = new Array;
    var freq = this.mediaHandlerService.getUpdatedFrequency();
    
    var ac = this.audioAnalyzerService.autoCorrelate(freq, this.mediaHandlerService.getSampleRate() );
    this.drawCanvas(freq)
    this.getPitch(ac);
    this.animationFrame = requestAnimationFrame(() => this.updatePitch())
  }

  drawCanvas(buf){
    var waveCanvas = this.ctx;
    waveCanvas.clearRect(0,0,512,256);
    waveCanvas.strokeStyle = "grey";
    waveCanvas.lineWidth = 5;
    waveCanvas.beginPath();
    waveCanvas.moveTo(0,buf[0]);
    for (var i=1;i<512;i++) {
      waveCanvas.lineTo(i,128+(buf[i]*128));
    }
    waveCanvas.stroke();
  }

  getPitch(ac){
    if (ac == -1) {
      this.pitch = 0;
      this.note = "--";
      // detectorElem.className = "vague";
      // pitchElem.innerText = "--";
      // noteElem.innerText = "-";
      // detuneElem.className = "";
      // detuneAmount.innerText = "--";
    } else {
      // detectorElem.className = "confident";
      this.pitch = Math.round(ac);
      var noteInt =  this.audioAnalyzerService.noteFromPitch(this.pitch);
      this.note = this.noteStrings[noteInt%12]

      this.detuneInt = this.audioAnalyzerService.centsOffFromPitch( this.pitch, noteInt );

      if (this.detuneInt == 0 ) {
        this.detune = "good";
      } else {
        if (this.detuneInt < 0){
          this.detune = "flat";
        } else{
          this.detune = "sharp";
        }
      }
    }
  }
}