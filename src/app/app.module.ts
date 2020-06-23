import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { MetronomeComponent } from './components/metronome/metronome.component';

const socketConfig: SocketIoConfig = { url: 'https://sync-metronome.herokuapp.com', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    MetronomeComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(socketConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
