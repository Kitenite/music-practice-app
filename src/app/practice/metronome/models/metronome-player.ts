import { PlayerState } from './player-state-enum'
 
export class MetronomePlayer {
    tempo:number = 120;
    rate:number = 60000/this.tempo;
    playInterval:number;
    firstPlay:boolean = true;
    state:PlayerState = PlayerState.Paused;
}
