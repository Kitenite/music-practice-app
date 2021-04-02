import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { NextBeat } from '../models/next-beat';

@Injectable({
  providedIn: 'root'
})

export class TimeSyncService {
  constructor(private socket:Socket) { }

  subscribeConenct():Observable<any>{
    return this.socket.fromEvent('connect');
  }

  // Important setup function to listen for next beat
  subscribeNextBeat():Observable<NextBeat>{
    return this.socket.fromEvent('nextBeatSent');
  }

  subscribeClientCount():Observable<any>{
    return this.socket.fromEvent('clientCount');
  }

  requestNextBeat():void{
    this.socket.emit('requestNextBeat');
  }

  requestNewTempo(newTempo:number):void{
    this.socket.emit('requestNewTempo', {tempo:newTempo});
  }

  syncDevices():void{
    this.socket.emit('syncDevices');
  }

}
