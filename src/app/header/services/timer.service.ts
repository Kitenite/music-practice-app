import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor() { }

  currentTime:number = 0;
  viewableTime:string = "00:00:00";
  interval:any;
  isPlaying:boolean = false;
  toggleTimer() {
    if (!this.isPlaying){
      this.isPlaying = true;
      this.interval = setInterval(() => {
        this.currentTime+=1;
        this.viewableTime = new Date(this.currentTime * 1000).toISOString().substr(11, 8);
      },1000)
    } else{
      clearInterval(this.interval);
      this.isPlaying = false;
    }
  }

  resetTimer(){
    this.isPlaying = false;
    clearInterval(this.interval);
    this.currentTime = 0;
    this.viewableTime = new Date(this.currentTime * 1000).toISOString().substr(11, 8);
  }

}
