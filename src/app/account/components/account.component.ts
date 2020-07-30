import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAuthService } from '../../shared/services/user-auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  items: Observable<any[]>;
  
  constructor(
    public auth: UserAuthService
    ) {}

  ngOnInit(): void {}

  signIn(){
    console.log("sign in")
  }

  signUp(){
    console.log("sign up")
  }
}
