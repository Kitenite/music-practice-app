import { Component, OnInit } from '@angular/core';

import { TimeSyncService } from '../../services/time-sync.service'
import { NextBeat } from '../../models/next-beat'

@Component({
  selector: 'app-metronome',
  templateUrl: './metronome.component.html',
  styleUrls: ['./metronome.component.scss']
})

export class MetronomeComponent implements OnInit {
  // Variables:
  tempo = 120;

  nextBeat:NextBeat;
  constructor(private timeSyncService:TimeSyncService) { }

  ngOnInit(): void {
    this.requestNextBeat();
    this.timeSyncService.subscribeNextBeat().subscribe(nextBeat => this.nextBeat = nextBeat);
  }

  requestNextBeat(){
    this.timeSyncService.requestNextBeat();
  }

  // Media client handlers
  emitPlay(){
    console.log("play")
  }

  sync(){
    console.log("sync")
  }

  sendTempo(){
    console.log("sendTempo")
  }

  tempoChange(amount:number){
    console.log("tempo change", amount)
  }

  toggleResolution(){
    console.log("toggle resolution")
  }

  toggleTempoButton(){
    console.log("toggle tempo button")
  }



  

}
