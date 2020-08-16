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
  startTime:Date;
  endTime:Date;
  
  toggleTimer() {
    if (!this.isPlaying){
      this.startTime = new Date()
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
    this.endTime = new Date()
    this.auth.user$.subscribe((user) => {
      if (user){
        var timeStamp = (new Date).toDateString();
        this.store.doc(`users/${user.uid}/logs/${timeStamp}`).set({
          date: timeStamp,
          sessions: firestore.FieldValue.arrayUnion({startTime: this.startTime.toISOString(), endTime: this.endTime.toISOString()})
        }, {merge: true}).finally(()=>{
          this.resetTimer();
        }).catch(()=> alert("Something went wrong"))
      } else {
        alert("User not signed in")
      }
    })
  }

}
