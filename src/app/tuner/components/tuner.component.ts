import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';
import { AudioContext } from 'angular-audio-context';

@Component({
  selector: 'app-tuner',
  templateUrl: './tuner.component.html',
  styleUrls: ['./tuner.component.scss']
})
export class TunerComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;  
  private ctx: CanvasRenderingContext2D;

  // Analyzer
  analyzer:any;
  frequencyData;
  animationFrame;
  pitch = 0;
  note = "--";

  // Recorder
  title:string = 'micRecorder';
  record:any;
  recording:boolean = false;
  blobUrl:string;
  error:any;

  constructor(
    private domSanitizer: DomSanitizer,
    private audioContext: AudioContext
  ) {}

  ngOnInit(){
    this.ctx = this.canvas.nativeElement.getContext('2d');
  }

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
    this.recording = true;
    // Add analyzer
    this.analyzeStream(stream);
    console.log("recording")

  }

  analyzeStream(stream:MediaStream){
    let source = this.audioContext.createMediaStreamSource(stream)
    this.analyzer = this.audioContext.createAnalyser();
    source.connect(this.analyzer);
    this.frequencyData = new Float32Array(this.analyzer.frequencyBinCount);
    this.updatePitch()
  }

  stopRecording() {
    cancelAnimationFrame(this.animationFrame)
    this.record.stop(this.processRecording.bind(this));
    this.recording = false;
  }

  processRecording(blob) {
    this.blobUrl = URL.createObjectURL(blob);
    // console.log("blob: ", blob);
    // console.log("blobUrl : ", this.blobUrl);
  }

  errorCallback(error) {
    this.error = 'Can not play audio in your browser';
    console.log(this.error)
  }

  // Pitch Detection
  noteStrings = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

  updatePitch() {
    var cycles = new Array;
    this.analyzer.getFloatTimeDomainData(this.frequencyData);
    var ac = this.autoCorrelate( this.frequencyData, this.audioContext.sampleRate );
    console.log(ac)
    this.drawCanvas(this.frequencyData)
    this.getPitch(ac);
    this.animationFrame = requestAnimationFrame(() => this.updatePitch())
  }

  drawCanvas(buf){
    var waveCanvas = this.ctx;
    waveCanvas.clearRect(0,0,512,256);
    waveCanvas.strokeStyle = "red";
    waveCanvas.beginPath();
    waveCanvas.moveTo(0,0);
    waveCanvas.lineTo(0,256);
    waveCanvas.moveTo(128,0);
    waveCanvas.lineTo(128,256);
    waveCanvas.moveTo(256,0);
    waveCanvas.lineTo(256,256);
    waveCanvas.moveTo(384,0);
    waveCanvas.lineTo(384,256);
    waveCanvas.moveTo(512,0);
    waveCanvas.lineTo(512,256);
    waveCanvas.stroke();
    waveCanvas.strokeStyle = "black";
    waveCanvas.beginPath();
    waveCanvas.moveTo(0,buf[0]);
    for (var i=1;i<512;i++) {
      waveCanvas.lineTo(i,128+(buf[i]*128));
    }
    waveCanvas.stroke();
    
  }

  getPitch(ac){
    if (ac == -1) {
      // detectorElem.className = "vague";
      // pitchElem.innerText = "--";
      // noteElem.innerText = "-";
      // detuneElem.className = "";
      // detuneAmount.innerText = "--";
    } else {
      // detectorElem.className = "confident";
      this.pitch = Math.round(ac);
      console.log("pitch: ", this.pitch);
      var noteInt =  this.noteFromPitch(this.pitch);
      this.note = this.noteStrings[noteInt%12]
      console.log("note: ", this.note);
      var detune = this.centsOffFromPitch( this.pitch, this.note );
      console.log("detune: ", detune)
      // if (detune == 0 ) {
      //   detuneElem.className = "";
      //   detuneAmount.innerHTML = "--";
      // } else {
      //  if (detune < 0){
      //    detuneElem.className = "flat";
      //   }
      //  else{
      //    detuneElem.className = "sharp";
      //   }
      //  detuneAmount.innerHTML = Math.abs( detune );
      // }
    }  
  }

  noteFromPitch( frequency ) {
    var noteNum = 12 * (Math.log( frequency / 440 )/Math.log(2) );
    return Math.round( noteNum ) + 69;
  }
  
  frequencyFromNoteNumber( note ) {
    return 440 * Math.pow(2,(note-69)/12);
  }
  
  centsOffFromPitch( frequency, note ) {
    return Math.floor( 1200 * Math.log( frequency / this.frequencyFromNoteNumber( note ))/Math.log(2) );
  }

  autoCorrelate(buf, sampleRate) {
    const SIZE = buf.length;
    const MAX_SAMPLES = Math.floor(SIZE/2);
    const MIN_SAMPLES = 0;
    const GOOD_ENOUGH_CORRELATION = 0.9;

    var best_offset = -1;
    var best_correlation = 0;
    var rms = 0;
    var foundGoodCorrelation = false;
    var correlations = new Array(MAX_SAMPLES);
  
    for (var i=0;i<SIZE;i++) {
      var val = buf[i];
      rms += val*val;
    }
    rms = Math.sqrt(rms/SIZE);
    if (rms<0.01){
      // console.log("Not enough signal")
      return -1;
    }

    var lastCorrelation=1;
    for (var offset = MIN_SAMPLES; offset < MAX_SAMPLES; offset++) {
      var correlation = 0;
  
      for (var i=0; i<MAX_SAMPLES; i++) {
        correlation += Math.abs((buf[i])-(buf[i+offset]));
      }
      correlation = 1 - (correlation/MAX_SAMPLES);
      correlations[offset] = correlation; // store it, for the tweaking we need to do below.
      if ((correlation>GOOD_ENOUGH_CORRELATION) && (correlation > lastCorrelation)) {
        foundGoodCorrelation = true;
        if (correlation > best_correlation) {
          best_correlation = correlation;
          best_offset = offset;
        }
      } else if (foundGoodCorrelation) {
        // short-circuit - we found a good correlation, then a bad one, so we'd just be seeing copies from here.
        // Now we need to tweak the offset - by interpolating between the values to the left and right of the
        // best offset, and shifting it a bit.  This is complex, and HACKY in this code (happy to take PRs!) -
        // we need to do a curve fit on correlations[] around best_offset in order to better determine precise
        // (anti-aliased) offset.
  
        // we know best_offset >=1, 
        // since foundGoodCorrelation cannot go to true until the second pass (offset=1), and 
        // we can't drop into this clause until the following pass (else if).
        var shift = (correlations[best_offset+1] - correlations[best_offset-1])/correlations[best_offset];  
        return sampleRate/(best_offset+(8*shift));
      }
      lastCorrelation = correlation;
    }
    if (best_correlation > 0.01) {
      // console.log("f = " + sampleRate/best_offset + "Hz (rms: " + rms + " confidence: " + best_correlation + ")")
      return sampleRate/best_offset;
    }
    return -1;
  //	var best_frequency = sampleRate/best_offset;
  }


}