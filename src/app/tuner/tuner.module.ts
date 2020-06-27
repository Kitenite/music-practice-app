import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TunerRoutingModule } from './tuner-routing.module';
import { TunerComponent } from './components/tuner.component';


@NgModule({
  declarations: [TunerComponent],
  imports: [
    CommonModule,
    TunerRoutingModule
  ]
})
export class TunerModule { }