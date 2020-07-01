import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './components/timer.component';
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [TimerComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    TimerComponent
  ]
})
export class TimerModule { }
