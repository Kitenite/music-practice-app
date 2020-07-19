import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PracticeComponent } from './components/practice.component';

const routes: Routes = [
  { path: '', component: PracticeComponent },
  { path: 'metronome', loadChildren: () => import('./metronome/metronome.module').then(m => m.MetronomeModule) },
  { path: 'tuner', loadChildren: () => import('./tuner/tuner.module').then(m => m.TunerModule) },
  { path: 'drone', loadChildren: () => import('./drone/drone.module').then(m => m.DroneModule) },
  { path: 'timer', loadChildren: () => import('./countdown-timer/countdown-timer.module').then(m => m.CountdownTimerModule) },
  { path: 'record', loadChildren: () => import('./record/record.module').then(m => m.RecordModule) }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PracticeRoutingModule { }
