import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Materials
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button'
import { MatSelectModule } from '@angular/material/select';

// Custom
import { TunerRoutingModule } from './tuner-routing.module';
import { TunerComponent } from './components/tuner.component';


@NgModule({
  declarations: [
    TunerComponent
  ],
  imports: [
    CommonModule,
    TunerRoutingModule,
    MatSliderModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class TunerModule { }