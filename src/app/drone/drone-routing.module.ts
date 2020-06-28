import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DroneComponent } from './components/drone.component';

const routes: Routes = [{ path: '', component: DroneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DroneRoutingModule { }
