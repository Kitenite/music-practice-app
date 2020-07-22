import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioAnalyzerService {
  
  constructor(){}

  autoCorrelate(buf, sampleRate) {
    const SIZE = buf.length;
    const MAX_SAMPLES = Math.floor(SIZE/2);
    const MIN_SAMPLES = 0;
    const GOOD_ENOUGH_CORRELATION = 0.9;

    var best_offset = -1;
    var best_correlation = 0;
    var rms = 0;
    var foundGoodCorrelation = false;
    var correlations = new Array(MAX_SAMPLES);

    for (var i=0;i<SIZE;i++) {
        var val = buf[i];
        rms += val*val;
    }
    rms = Math.sqrt(rms/SIZE);
    // Not enough signal
    if (rms<0.01){
        return -1;
    }

    var lastCorrelation=1;
    for (var offset = MIN_SAMPLES; offset < MAX_SAMPLES; offset++) {
        var correlation = 0;
        for (var i=0; i<MAX_SAMPLES; i++) {
            correlation += Math.abs((buf[i])-(buf[i+offset]));
        }
        correlation = 1 - (correlation/MAX_SAMPLES);
        correlations[offset] = correlation; // store it, for the tweaking we need to do below.
        if ((correlation>GOOD_ENOUGH_CORRELATION) && (correlation > lastCorrelation)) {
            foundGoodCorrelation = true;
            if (correlation > best_correlation) {
                best_correlation = correlation;
                best_offset = offset;
            }
        } else if (foundGoodCorrelation) {
            var shift = (correlations[best_offset+1] - correlations[best_offset-1])/correlations[best_offset];
            return sampleRate/(best_offset+(8*shift));
        }
        lastCorrelation = correlation;
    }
    if (best_correlation > 0.01) {
        // console.log("f = " + sampleRate/best_offset + "Hz (rms: " + rms + " confidence: " + best_correlation + ")")
        return sampleRate/best_offset;
    }
    return -1;
  }

  noteFromPitch(frequency) {
      var noteNum = 12 * (Math.log( frequency / 440 )/Math.log(2) );
      return Math.round( noteNum ) + 69;
  }
  
  frequencyFromNoteNumber(note) {
      return 440 * Math.pow(2,(note-69)/12);
  }
  
  centsOffFromPitch(frequency, note) {
      return Math.floor( 1200 * Math.log( frequency / this.frequencyFromNoteNumber(note))/Math.log(2));
  }
}
