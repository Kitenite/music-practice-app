import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DroneRoutingModule } from './drone-routing.module';
import { DroneComponent } from './components/drone.component';


@NgModule({
  declarations: [DroneComponent],
  imports: [
    CommonModule,
    DroneRoutingModule
  ]
})
export class DroneModule { }
