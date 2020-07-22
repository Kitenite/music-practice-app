import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


import { CountdownTimerRoutingModule } from './countdown-timer-routing.module';
import { CountdownTimerComponent } from './components/countdown-timer.component';

@NgModule({
  declarations: [CountdownTimerComponent],
  imports: [
    CommonModule,
    CountdownTimerRoutingModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class CountdownTimerModule { }
