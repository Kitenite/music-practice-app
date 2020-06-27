import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

// Custom components
import { AppComponent } from './app.component';

// Custom modules
import { AppRoutingModule } from './app-routing.module';
import { MetronomeModule } from './metronome/metronome.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MetronomeModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  exports: [
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
