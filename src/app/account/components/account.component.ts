import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAuthService } from '../../shared/services/user-auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  items: Observable<any[]>;
  recordings;

  constructor(
    public auth: UserAuthService,
    private store: AngularFirestore,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.auth.user$.subscribe((user)=>{
      this.store.collection(`users/${user.uid}/recordings/`).get().subscribe((snapshot)=>{
        this.recordings = snapshot.docs.map((doc)=>{
          var data  = doc.data()
          data.downloadURL =  this.sanitizer.bypassSecurityTrustResourceUrl(data.downloadURL);
          return data
        })
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
