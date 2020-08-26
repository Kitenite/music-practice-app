import { Component, OnInit } from '@angular/core';
import { TimerService } from '../services/timer.service'
import { CalendarService } from '../../shared/services/calendar.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  constructor(
    public timerService:TimerService,
    private calendarService:CalendarService
    ) { }

  ngOnInit(): void {}

  async submitTime(){
    if (confirm("This will add the session to your Google Calendar")) {
      this.timerService.submitTime()
      const insertResult = await this.calendarService.insertEvent(this.timerService.startTime.toISOString(), this.timerService.endTime.toISOString())
      if (insertResult == 0) {
        this.timerService.resetTimer()
      }
    }
  }


}
