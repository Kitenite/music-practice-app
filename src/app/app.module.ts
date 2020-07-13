import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconRegistry } from '@angular/material/icon';

// Custom components
import { AppComponent } from './app.component';

// Custom modules
import { AppRoutingModule } from './app-routing.module';
import { MetronomeModule } from './metronome/metronome.module';
import { TunerModule } from './tuner/tuner.module';
import { HeaderModule } from './header/header.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MetronomeModule,
    TunerModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HeaderModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry) {
    iconRegistry.setDefaultFontSetClass('material-icons-round');
  }
 }
