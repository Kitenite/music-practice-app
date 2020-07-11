import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountdownTimerService {

  constructor() { }
  
  timeLeft:number = 0
  timeInterval;

  subscribeTime():Observable<number>{
    return new Observable(observer => {
      setInterval(() => {
        observer.next(this.timeLeft)
      }, 1000);
    })
  }

  startTimer(duration:number){
    this.resetTimer();
    this.timeLeft = duration;
    this.resumeTimer();
    return 
  }

  resumeTimer(){
    this.timeInterval = setInterval( () => {
      this.timeLeft-=1;
      if (this.timeLeft <=0){
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
    this.timeLeft = 0;
  }
}
