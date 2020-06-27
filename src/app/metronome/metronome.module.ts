import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// External libraries
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { AudioContextModule } from 'angular-audio-context';

// Custom components
import { MetronomeComponent } from './components/metronome.component';

const socketConfig: SocketIoConfig = { url: 'https://sync-metronome.herokuapp.com', options: {} };

@NgModule({
  declarations: [
    MetronomeComponent
  ],
  imports: [
    CommonModule,
    SocketIoModule.forRoot(socketConfig),
    AudioContextModule.forRoot('balanced'),
  ],
  exports: [
    MetronomeComponent
  ]
})
export class MetronomeModule { }
