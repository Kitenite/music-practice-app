import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';

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
    MatTabsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
