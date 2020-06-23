import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// External libraries
import { AudioContextModule } from 'angular-audio-context';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

// Custom components
import { AppComponent } from './app.component';
import { MetronomeComponent } from './components/metronome/metronome.component';


const socketConfig: SocketIoConfig = { url: 'https://sync-metronome.herokuapp.com', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    MetronomeComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(socketConfig),
    AudioContextModule.forRoot('balanced')
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
