import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';

declare var gapi:any;

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  user$:Observable<firebase.User>;
  calendarItems;

  constructor(
    private afAuth:AngularFireAuth
    ) { 
      this.initClient();
      this.user$ = afAuth.authState;
    }
    

  initClient(){
    gapi.load('client', () => {
      gapi.client.init({
        apiKey:'AIzaSyBRirI5QLF8gXzgU_jZWNDtzjw6mJAwBAQ',
        clientId: '291182046376-6kvjnmkjclhfdmc2mhg28bacfq7lng3l.apps.googleusercontent.com',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
        scope: 'https://www.googleapis.com/auth/calendar.events'
      })

      gapi.client.load('calendar', 'v3', ()=>{
        this.getCalendar()
      })
    })
    
  }

  async login(){
    const googleAuth = gapi.auth2.getAuthInstance()
    const googleUser = await googleAuth.signIn()
    const token = googleUser.getAuthResponse().id_token;

    const credential = auth.GoogleAuthProvider.credential(token)
    await this.afAuth.signInWithCredential(credential)
  }

  async getCalendar(){
    console.log(gapi.client)
    const events = await gapi.client.calendar.events.list({
      calendarId: 'primary',
      timeMin: new Date().toISOString(),
      showDeleted: false,
      singleEvents:true,
      maxResults: 10,
      orderBy: 'startTime'
    })
    this.calendarItems = events.result.items
    console.log(this.calendarItems)
  }

  async insertEvent(){
    const insert  = await gapi.client.calendar.events.insert({
      calendarId: 'primary',
      start: {
        dateTime: this.hoursFromNow(2),
        timeZone: 'America/Los_Angeles'
      }, 
      end: {
        dateTime: this.hoursFromNow(3),
        timeZone: 'America/Los_Angeles'
      },
      summary: 'Testing',
      description: 'This is my long description'

    })
  }

  hoursFromNow(hours):string{
    return new Date(Date.now()+hours*1000*60*60).toISOString()
  }
}
