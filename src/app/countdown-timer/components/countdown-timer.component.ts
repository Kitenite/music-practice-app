import { Component, OnInit } from '@angular/core';
import { CountdownTimerService } from '../services/countdown-timer.service';

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
  alertAudio;

  ngOnInit(): void {
    this.generateUnits();
    this.countdownService.subscribeTime().subscribe(timeLeft => {
      this.timeLeft = timeLeft;
      this.updateViewableTime(timeLeft)
      if (timeLeft == 0) {
        this.timerDoneAlert();
        this.resetTimer();
      }
    })
  }

  generateUnits(){
    for(var current:number = 0; current<60; current +=1){
      this.timeUnit.push(current);
    }
  }

  startTimer(){
    this.setAlertSound()
    var duration = 0;
    this.timeOptions.forEach(option => {
      duration += option.currentValue*option.secondsMultiplier;
    });
    if (duration){
      this.countdownService.startTimer(duration);
      this.updateViewableTime(duration);
    }
  }

  togglePause(){
    if (this.countdownService.timeInterval) {
      this.countdownService.pauseTimer()
    } else {
      this.countdownService.resumeTimer()
    }
    
  }

  resetTimer(){
    this.countdownService.resetTimer()
  }

  updateViewableTime(timeLeft){
    this.viewableTime = new Date(timeLeft*1000).toISOString().substr(11, 8);
  }

  setAlertSound(){
    this.alertAudio = new Audio();
    this.alertAudio.src = "../../assets/audio/timerAlert.mp3";
    this.alertAudio.load();
  }

  timerDoneAlert(){
    this.alertAudio.play();
    setTimeout(() => { alert("Timer completed!"); }, 1);
  }
}

interface TimeOption{
  name:string;
  secondsMultiplier:number;
  currentValue:number;
}
