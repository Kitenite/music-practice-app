import { Component } from '@angular/core';
import { DroneAudioService } from '../services/drone-audio.service'
import { MusicalNote } from '../../shared/models/musical-notes'
import * as musicalNotes from '../../../assets/musicalNotes.json'

@Component({
  selector: 'app-drone',
  templateUrl: './drone.component.html',
  styleUrls: ['./drone.component.scss']
})
export class DroneComponent {

  constructor(private droneAudioService:DroneAudioService) { }
  notes:[MusicalNote] = (musicalNotes as any).default;
  activeNote;


  ngOnDestroy(): void{
    this.droneAudioService.stopNote()
    this.activeNote = null;
  }

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