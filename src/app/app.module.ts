import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Custom components
import { AppComponent } from './app.component';

// Custom modules
import { AppRoutingModule } from './app-routing.module'
import { MetronomeModule } from './metronome/metronome.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MetronomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
