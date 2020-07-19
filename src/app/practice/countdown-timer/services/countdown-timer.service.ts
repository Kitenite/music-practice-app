import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountdownTimerService {

  constructor() { }
  
  fullDuration = 1;
  timeLeft:number = -1
  timeInterval;
  timerActive:boolean = false;

  subscribeTime():Observable<number>{
    return new Observable(observer => {
      setInterval(() => {
        observer.next(this.timeLeft)
      }, 1000);
    })
  }

  startTimer(duration:number){
    this.resetTimer();
    this.fullDuration = duration;
    this.timeLeft = duration;
    this.resumeTimer();
    this.timerActive = true;
    return 
  }

  resumeTimer(){
    this.timeInterval = setInterval( () => {
      this.timeLeft-=1;
      if (this.timeLeft <= -1){
        this.resetTimer()
      }
    }, 1000)
  }

  pauseTimer(){
    clearInterval(this.timeInterval);
    this.timeInterval = null;
  }

  resetTimer(){
    this.pauseTimer();
    this.timeLeft = -1;
    this.timerActive = false;
  }
}
