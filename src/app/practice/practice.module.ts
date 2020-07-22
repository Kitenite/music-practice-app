import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

// Custom Modules
import { PracticeRoutingModule } from './practice-routing.module';
import { PracticeComponent } from './components/practice.component';
import { MetronomeModule } from './metronome/metronome.module';
import { TunerModule } from './tuner/tuner.module';

@NgModule({
  declarations: [
    PracticeComponent
  ],
  imports: [
    CommonModule,
    PracticeRoutingModule,
    MetronomeModule,
    TunerModule,
    MatTabsModule
  ]
})
export class PracticeModule { }
