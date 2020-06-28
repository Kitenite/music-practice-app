import { Component, OnInit } from '@angular/core';
import { DroneAudioService } from '../services/drone-audio.service'
import { MusicalNote } from '../models/musical-notes'

@Component({
  selector: 'app-drone',
  templateUrl: './drone.component.html',
  styleUrls: ['./drone.component.scss']
})
export class DroneComponent implements OnInit {

  constructor(private droneAudioService:DroneAudioService) { }
  activeNote?:MusicalNote;

  ngOnInit(): void {
  }

  notes:MusicalNote[] = [
    {
      name: 'C',
      frequency: 261.63
    }, {
      name: 'C#',
      frequency: 277.18
    }, {
      name: 'D',
      frequency: 293.66
    }, {
      name: 'D#',
      frequency: 311.13
    }, {
      name: 'E',
      frequency: 329.63
    }, {
      name: 'F',
      frequency: 349.23
    }, {
      name: 'F#',
      frequency: 369.99
    }, {
      name: 'G',
      frequency: 392
    }, {
      name: 'G#',
      frequency: 415.3
    }, {
      name: 'A',
      frequency: 440
    }, {
      name: 'A#',
      frequency: 466.16
    }, {
      name: 'B',
      frequency: 493.88
    }
  ]

  playNote(note){
    if (note == this.activeNote){
      this.droneAudioService.stopNote()
      this.activeNote = null;
      return
    }
    this.activeNote = note;
    this.droneAudioService.playNote(note.frequency)
  }

  changeOctave(multiplier:number){
    this.droneAudioService.changeOctave(multiplier)
  }
}