import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { ServiceWorkerModule } from '@angular/service-worker';

// Angular
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAnalyticsModule, UserTrackingService, ScreenTrackingService } from '@angular/fire/analytics';

// Custom modules
import { HeaderModule } from './header/header.module';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';

// External libararies
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { AudioContextModule } from 'angular-audio-context';

const socketConfig: SocketIoConfig = { url: 'https://kallis-practice.herokuapp.com', options: {} };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HeaderModule,

    SocketIoModule.forRoot(socketConfig),
    AudioContextModule.forRoot('balanced'),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAnalyticsModule
  ],
  exports: [],
  providers: [
    UserTrackingService,
    ScreenTrackingService
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry) {
    iconRegistry.setDefaultFontSetClass('material-icons-round');
  }
 }
