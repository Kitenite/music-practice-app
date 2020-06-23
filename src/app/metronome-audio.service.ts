import { Injectable, OnInit } from '@angular/core';
import { AudioContext } from 'angular-audio-context';

@Injectable({
  providedIn: 'root'
})

export class MetronomeAudioService{

  constructor(private _audioContext: AudioContext) {}

  async beep() {
    if (this._audioContext.state === 'suspended') {
        await this._audioContext.resume();
    }
    const oscillatorNode = this._audioContext.createOscillator();

    oscillatorNode.onended = () => oscillatorNode.disconnect();
    oscillatorNode.connect(this._audioContext.destination);

    oscillatorNode.start();
    oscillatorNode.stop(this._audioContext.currentTime + 0.5);
  }

  unlocked:boolean = false;
  isPlaying:boolean = false;      // Are we currently playing?
  startTime:number;              // The start time of the entire sequence.
  current16thNote;        // What note is currently last scheduled?
  tempo:number = 120.0;          // tempo (in beats per minute)
  lookahead:number = 25.0;       // How frequently to call scheduling function
  soundFrequency:number = 880.0;
  scheduleAheadTime:number = 0.1;    // How far ahead to schedule audio (sec)
                            // This is calculated from lookahead, and overlaps
                            // with next interval (in case the timer is late)
  nextNoteTime:number = 0.0;     // when the next note is due.
  noteResolution:number = 2;     // 0 == 16th, 1 == 8th, 2 == quarter note
  noteLength:number = 0.05;      // length of "beep" (in seconds)
  last16thNoteDrawn:number = -1; // the last "box" we drew on the screen
  notesInQueue = [];      // the notes that have been put into the web audio,
                            // and may or may not have played yet. {note, time}
  timerWorker:Worker;     // The Web Worker used to fire timer messages


  nextNote() {
      // Advance current note and time by a 16th note...
      let secondsPerBeat:number = 60.0 / this.tempo;    // Notice this picks up the CURRENT
                                            // tempo value to calculate beat length.
      this.nextNoteTime += 0.25 * secondsPerBeat;    // Add beat length to last beat time

      this.current16thNote++;    // Advance the beat number, wrap to zero
      if (this.current16thNote == 16) {
          this.current16thNote = 0;
      }
  }

  scheduleNote( beatNumber, time ) {
      // push the note on the queue, even if we're not playing.
      this.notesInQueue.push( { note: beatNumber, time: time } );

      if ( (this.noteResolution==1) && (beatNumber%2))
          return; // we're not playing non-8th 16th notes
      if ( (this.noteResolution==2) && (beatNumber%4))
          return; // we're not playing non-quarter 8th notes

      // create an oscillator
      let osc = this._audioContext.createOscillator();
      osc.connect( this._audioContext.destination );
      // if (beatNumber % 16 === 0)    // beat 0 == high pitch
      //     osc.frequency.value = 880.0;
      if (beatNumber % 4 === 0 )    // quarter notes = medium pitch
          osc.frequency.value = this.soundFrequency
      else                        // other 16th notes = low pitch
          osc.frequency.value = this.soundFrequency/2;

      osc.start( time );
      osc.stop( time + this.noteLength );
  }

  scheduler() {
      // while there are notes that will need to play before the next interval,
      // schedule them and advance the pointer.
      while (this.nextNoteTime < this._audioContext.currentTime + this.scheduleAheadTime ) {
          this.scheduleNote( this.current16thNote, this.nextNoteTime );
          this.nextNote();
      }
  }

  play() {
    if (!this.unlocked) {
      // play silent buffer to unlock the audio
      let buffer = this._audioContext.createBuffer(1, 1, 22050);
      let node = this._audioContext.createBufferSource();
      node.buffer = buffer;
      node.start(0);
      this.unlocked = true;
    }

    this.isPlaying = !this.isPlaying;

    if (this.isPlaying) { // start playing
        this.current16thNote = 0;
        this.nextNoteTime = this._audioContext.currentTime;
        this.timerWorker.postMessage("start");
        return false;
    } else {
        this.timerWorker.postMessage("stop");
        return true;
    }
  }
  lastNotePartition = -1;

  // TODO: Drawing should be happing in component
  draw() {
    let currentNote:number = this.last16thNoteDrawn;
    let currentTime:number = this._audioContext.currentTime;

    while (this.notesInQueue.length && this.notesInQueue[0].time < currentTime) {
        currentNote = this.notesInQueue[0].note;
        this.notesInQueue.splice(0,1);   // remove note from queue
    }
    // We only need to draw if the note has moved.
    // Not partition since we only care about every 4 notes
    let notePartition = currentNote/4
    if (this.last16thNoteDrawn != currentNote && this.lastNotePartition !=notePartition) {
      // TODO: Need to turn this into an observable
      // blink(blinkers.eq(notePartition))
      this.lastNotePartition = notePartition;
      this.last16thNoteDrawn = currentNote;
    }
    // set up to draw again
    // requestAnimFrame(draw);
  }

  init(){
    // TODO: Blinkers should be done in metronome component
    // blinkers = $("#blinkers").children();

    // NOTE: THIS RELIES ON THE MONKEYPATCH LIBRARY BEING LOADED FROM
    // Http://cwilso.github.io/AudioContext-MonkeyPatch/AudioContextMonkeyPatch.js
    // TO WORK ON CURRENT CHROME!!  But this means our code can be properly
    // spec-compliant, and work on Chrome, Safari and Firefox.
    // if we wanted to load audio files, etc., this is where we should do it.

    // requestAnimFrame(draw);    // start the drawing loop.
    this.timerWorker = new Worker('src/app/services/metronome.worker.ts', { type: 'module' });
    this.timerWorker.onmessage = ({ data }) => {
      if (data == "tick") {
        this.scheduler();
      }
      else{
        console.log("message: " + data);
      }
    };
    this.timerWorker.postMessage({"interval":this.lookahead});
  }
}
