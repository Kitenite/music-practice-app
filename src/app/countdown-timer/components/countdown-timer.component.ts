import { Component, OnInit } from '@angular/core';
import { count } from 'console';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit {

  constructor() { }

  timeOptions:TimeOption[] = [
    {name:"hours", secondsMultiplier:3600, currentValue:0},
    {name:"minutes", secondsMultiplier:60, currentValue:0},
    {name:"seconds", secondsMultiplier:1, currentValue:0}
  ]

  timeUnit:number[]=[];
  countdownTime:number;

  ngOnInit(): void {
    this.generateUnits();
  }

  generateUnits(){
    for(var current:number = 0; current<60; current +=1){
      this.timeUnit.push(current);
    }
  }

  startTimer(){
    this.countdownTime = 0;
    this.timeOptions.forEach(option => {
      this.countdownTime += option.currentValue*option.secondsMultiplier;
    });
    // TODO: Extract service for countdown here
    console.log(this.countdownTime);
  }

}

interface TimeOption{
  name:string;
  secondsMultiplier:number;
  currentValue:number;
}
