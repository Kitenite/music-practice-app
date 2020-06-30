import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';

// Custom components
import { AppComponent } from './app.component';

// Custom modules
import { AppRoutingModule } from './app-routing.module';
import { MetronomeModule } from './metronome/metronome.module';
import { TunerModule } from './tuner/tuner.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MetronomeModule,
    TunerModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
