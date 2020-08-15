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

  ngOnInit(): void {

  }

  submitTime(){
    if (confirm("This will add the time to your calendar")) {
      this.timerService.submitTime()
      this.calendarService.insertEvent(this.timerService.startTime.toISOString(), this.timerService.endTime.toISOString())
    }
  }


}
