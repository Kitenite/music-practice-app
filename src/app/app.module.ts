import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Custom components
import { AppComponent } from './app.component';

// Custom modules
import { MetronomeModule } from './metronome/metronome.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MetronomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
