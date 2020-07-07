import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'metronome', loadChildren: () => import('./metronome/metronome.module').then(m => m.MetronomeModule) },
  { path: 'tuner', loadChildren: () => import('./tuner/tuner.module').then(m => m.TunerModule) },
  { path: 'drone', loadChildren: () => import('./drone/drone.module').then(m => m.DroneModule) },
  { path: 'timer', loadChildren: () => import('./countdown-timer/countdown-timer.module').then(m => m.CountdownTimerModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 