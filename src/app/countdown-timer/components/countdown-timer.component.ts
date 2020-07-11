import { Component, OnInit } from '@angular/core';
import { count } from 'console';
import { CountdownTimerService } from '../services/countdown-timer.service'
@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit {

  constructor(
    public countdownService: CountdownTimerService
    ) { }

  timeOptions:TimeOption[] = [
    {name:"hours", secondsMultiplier:3600, currentValue:0},
    {name:"minutes", secondsMultiplier:60, currentValue:0},
    {name:"seconds", secondsMultiplier:1, currentValue:0}
  ]
  timeLeft:number = 0;
  timeUnit:number[]=[];
  viewableTime:string = "00:00:00";

  ngOnInit(): void {
    this.generateUnits();
    this.countdownService.subscribeTime().subscribe(timeLeft => {
      this.timeLeft = timeLeft;
      this.updateViewableTime(timeLeft)
    })
  }

  generateUnits(){
    for(var current:number = 0; current<60; current +=1){
      this.timeUnit.push(current);
    }
  }

  startTimer(){
    var duration = 0;
    this.timeOptions.forEach(option => {
      duration += option.currentValue*option.secondsMultiplier;
    });
    this.countdownService.startTimer(duration);
    this.updateViewableTime(duration);
  }

  updateViewableTime(timeLeft){
    this.viewableTime = new Date(timeLeft*1000).toISOString().substr(11, 8);
  }
}

interface TimeOption{
  name:string;
  secondsMultiplier:number;
  currentValue:number;
}
