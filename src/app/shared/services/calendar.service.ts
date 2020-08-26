import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  calendarItems;
  calendarSummary = 'Practice Calendar'

  constructor(
    private afAuth:AngularFireAuth,
    private userAuthService:UserAuthService
    ) {}

  async checkPracticeCalendar(){
    try {
      const result = await this.userAuthService.gapi.client.calendar.calendarList.list()
      const calendarList = result.result.items
      const found = calendarList.find(calendarItem => calendarItem.summary == this.calendarSummary);
      if (found) {
        return found.id
      } else {
        const result = await this.userAuthService.gapi.client.calendar.calendars.insert({
          "summary": this.calendarSummary,
          "description": "A calendar for logging practice sessions. Created by kpractice.\nColor-coding: Red: Less than 1 hour\nYellow: Between 1-2 hours\nBlue: Over Between 2-3 hours\nGreen: Over 4 hours"
        })
        return result.result.id
      }
    } catch (error) {
      console.log(error)
      return null
    } 
  }

  async insertEvent(startTime, endTime){
    await this.userAuthService.gapi.client.load('calendar', 'v3', async () => {
      const calendarId = await this.checkPracticeCalendar()
      if (calendarId){
        const insert = await this.userAuthService.gapi.client.calendar.events.insert({
          calendarId: calendarId,
          start: {
            dateTime: startTime,
            timeZone: 'America/Los_Angeles'
          }, 
          end: {
            dateTime: endTime,
            timeZone: 'America/Los_Angeles'
          },
          summary: this.calendarSummary,
          description: 'Red: Less than 1 hour\nYellow: Between 1-2 hours\nBlue: Over Between 2-3 hours\nGreen: Over 4 hours\nCreated by kpractice'
        })
      } else {
        alert("Something went wrong, try again")
        return 1
      }
    })
    return 0
  }
}
