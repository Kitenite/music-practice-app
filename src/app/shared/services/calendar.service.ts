import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

declare var gapi:any;

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  calendarItems;

  constructor(
    private afAuth:AngularFireAuth
    ) { 
      this.initClient()
    }
    
  initClient(){
    gapi.load('client', () => {
      gapi.client.init({
        apiKey:'AIzaSyBRirI5QLF8gXzgU_jZWNDtzjw6mJAwBAQ',
        clientId: '291182046376-6kvjnmkjclhfdmc2mhg28bacfq7lng3l.apps.googleusercontent.com',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
        scope: 'https://www.googleapis.com/auth/calendar.events'
      })
    })
  }


  async signInAuth2(){
    const googleAuth = gapi.auth2.getAuthInstance()
    if (! googleAuth.isSignedIn.ne){
      const googleUser = await googleAuth.signIn()
      const token = googleUser.getAuthResponse().id_token;  
      const credential = auth.GoogleAuthProvider.credential(token)
      await this.afAuth.signInWithCredential(credential)
    }    
  }

  async getCalendarItems(){
    const events = await gapi.client.calendar.events.list({
      calendarId: 'primary',
      timeMin: new Date().toISOString(),
      showDeleted: false,
      singleEvents:true,
      maxResults: 10,
      orderBy: 'startTime'
    })
    this.calendarItems = events.result.items
  }

  async insertEvent(startTime, endTime){
    await gapi.client.load('calendar', 'v3', ()=>{
      this.signInAuth2().then( async ()=>{
        console.log(startTime, endTime)
        const insert  = await gapi.client.calendar.events.insert({
          calendarId: 'primary',
          start: {
            dateTime: startTime,
            timeZone: 'America/Los_Angeles'
          }, 
          end: {
            dateTime: endTime,
            timeZone: 'America/Los_Angeles'
          },
          summary: 'Practice',
          description: ''
        })
      })
    })
  }
}
