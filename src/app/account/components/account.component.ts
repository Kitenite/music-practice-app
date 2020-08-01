import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAuthService } from '../../shared/services/user-auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  items: Observable<any[]>;
  
  constructor(
    public auth: UserAuthService,
    private store: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.auth.user$.subscribe((user)=>{
      this.store.collection(`users/${user.uid}/recordings/`).get().subscribe((snapshot)=>{
        snapshot.docs.map((doc)=>{
          console.log(doc.data().downloadURL)
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
