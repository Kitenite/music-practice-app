import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// Custom components
import { MetronomeRoutingModule } from './metronome-routing.module';
import { MetronomeComponent } from './components/metronome.component';


@NgModule({
  declarations: [MetronomeComponent],
  imports: [
    CommonModule,
    MetronomeRoutingModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MetronomeModule { }
