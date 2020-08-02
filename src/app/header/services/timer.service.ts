import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserAuthService } from '../../shared/services/user-auth.service';
import { firestore } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor(
    private store: AngularFirestore,
    private auth: UserAuthService
  ) { }

  currentTime:number = 0;
  viewableTime:string = "00:00:00";
  timeInterval:any = null;
  isPlaying:boolean = false;

  // Session data
  startTime:string;
  endTime:string;
  
  toggleTimer() {
    if (!this.isPlaying){
      this.startTime = Date().toString();
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
    this.startTime = this.endTime = null;
  }

  submitTime(){
    this.endTime = Date().toString()
    console.log(this.startTime, this.endTime)
    this.auth.user$.subscribe((user) => {
      if (user){
        var timeStamp = (new Date).toDateString();
        this.store.doc(`users/${user.uid}/logs/${timeStamp}`).set({
          sessions: firestore.FieldValue.arrayUnion(`${this.startTime} - ${this.endTime}`)
        }, {merge: true});
        this.resetTimer();
      } else {
        alert("User not signed in")
      }
    })
  }

}
