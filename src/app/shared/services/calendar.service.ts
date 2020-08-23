import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  calendarItems;

  constructor(
    private afAuth:AngularFireAuth,
    private userAuthService:UserAuthService
    ) {}


  async insertEvent(startTime, endTime){
    await this.userAuthService.gapi.client.load('calendar', 'v3', async () => {
      console.log(startTime, endTime)
      const insert  = await this.userAuthService.gapi.client.calendar.events.insert({
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
  }
}
