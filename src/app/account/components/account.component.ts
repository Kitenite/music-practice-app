import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAuthService } from '../../shared/services/user-auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { DomSanitizer } from '@angular/platform-browser';
import { Log } from '../../shared/models/log'
import { CalendarService } from '../../shared/services/calendar.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  items: Observable<any[]>;
  recordings;
  logs:Log[];

  constructor(
    public auth: UserAuthService,
    private store: AngularFirestore,
    private sanitizer: DomSanitizer,
    public calendar: CalendarService
  ) {}

  ngOnInit(): void {
    this.auth.user$.subscribe((user)=>{
      this.getRecordings(user);
      this.getSessions(user);
    })
  }

  getRecordings(user){
    this.store.collection(`users/${user.uid}/recordings/`).get().subscribe((snapshot)=>{
      this.recordings = snapshot.docs.map((doc)=>{
        var data  = doc.data()
        data.downloadURL =  this.sanitizer.bypassSecurityTrustResourceUrl(data.downloadURL);
        return data
      })
    })
  }

  getSessions(user){
    this.store.collection(`users/${user.uid}/logs/`).get().subscribe((snapshot)=>{
      this.logs = snapshot.docs.map((doc)=>{
        return doc.data() as Log
      })
    })
  }

  signIn(){
    console.log("sign in")
  }

  signUp(){
    console.log("sign up")
  }
}
