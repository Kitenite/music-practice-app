import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor() { }

  currentTime:number = 0;
  viewableTime:string = "00:00:00";
  timeInterval:any = null;
  isPlaying:boolean = false;
  
  toggleTimer() {
    if (!this.isPlaying){
      this.isPlaying = true;
      this.timeInterval = setInterval(() => {
        this.currentTime+=1;
        this.viewableTime = new Date(this.currentTime * 1000).toISOString().substr(11, 8);
      },1000)
    } else{
      clearInterval(this.timeInterval);
      this.isPlaying = false;
    }
  }

  resetTimer(){
    this.isPlaying = false;
    clearInterval(this.timeInterval);
    this.timeInterval = null;
    this.currentTime = 0;
    this.viewableTime = new Date(this.currentTime * 1000).toISOString().substr(11, 8);
  }

}
