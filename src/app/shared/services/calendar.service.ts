import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  calendarItems;
  calendarSummary = 'Practice Sessions'
  
  eventColors = { blue:1,green:2,purple:3,red:4,yellow:5 }

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
          "description": "A calendar for logging practice sessions.\nColor-coding:\n\tRed: Less than 1 hour\n\tYellow: Between 1-2 hours\n\tBlue: Over Between 2-3 hours\n\tGreen: Over 3 hours\n\nCreated by kpractice"
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
          colorId: this.eventColors.red,
          summary: this.calendarSummary,
          description: 'Color-coding:\n\tRed: Less than 1 hour\n\tYellow: Between 1-2 hours\n\tBlue: Over Between 2-3 hours\n\tGreen: Over 3 hours\n\nCreated by kpractice'
        })
        this.updateSessionColors(calendarId)
      } else {
        alert("Something went wrong, try again")
        return 1
      }
    })
    return 0
  }

  async updateSessionColors(calendarId){
    const date = (new Date()).toISOString().split('T')[0]
    const timeMin = date+'T00:00:01Z'
    const timeMax = date+'T23:59:59Z'
    const eventList = await this.userAuthService.gapi.client.calendar.events.list({
      calendarId: calendarId,
      timeMin: timeMin,
      timeMax: timeMax
    })
    var totalPracticeSeconds = 0
    eventList.result.items.forEach(event => {
      const startTime = event.start.dateTime.split('T')[1].split('Z')[0].split(':')
      const endTime = event.end.dateTime.split('T')[1].split('Z')[0].split(':')
      var startTimeSeconds = (+startTime[0]) * 60 * 60 + (+startTime[1]) * 60 + (+startTime[2]); 
      var endTimeSeconds = (+endTime[0]) * 60 * 60 + (+endTime[1]) * 60 + (+endTime[2]); 
      totalPracticeSeconds += (endTimeSeconds-startTimeSeconds) 
    });
    const totalPracticeHours = totalPracticeSeconds/3600
    console.log("Total practice time today: ", totalPracticeHours)
    var newEventColor;
    if (totalPracticeHours < 1){
      newEventColor = this.eventColors.red
    } else if (totalPracticeHours < 2){
      newEventColor = this.eventColors.yellow
    } else if (totalPracticeHours < 3){
      newEventColor = this.eventColors.blue
    } else {
      newEventColor = this.eventColors.green
    }
    eventList.result.items.forEach( async (event) => {
      event.colorId = newEventColor
      await this.userAuthService.gapi.client.calendar.events.update({
        calendarId: calendarId,
        eventId:event.id,
        resource:event
      })
    })
  }
}
