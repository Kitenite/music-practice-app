import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountdownTimerComponent } from './components/countdown-timer.component';

const routes: Routes = [{ path: '', component: CountdownTimerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountdownTimerRoutingModule { }
