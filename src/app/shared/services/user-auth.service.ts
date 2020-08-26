import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { auth } from 'firebase/app';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../models/user';
import { environment } from '../../../environments/environment';

declare var gapi:any;

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  user$: Observable<User>;
  constructor(
    private afAuth: AngularFireAuth,
    private store: AngularFirestore,
    private router: Router
  ) { 
    this.getUser()
    this.initGAPIClient()
  }

  getUser(){
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.store.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  get gapi(){
    return gapi
  }

  async googleSignin() {
    const googleAuth = gapi.auth2.getAuthInstance()
    const googleUser = await googleAuth.signIn()
    const token = googleUser.getAuthResponse().id_token
    const credential = auth.GoogleAuthProvider.credential(token);
    const afCredential = await this.afAuth.signInWithCredential(credential)
    return this.updateUserData(afCredential.user);
  }

  async initGAPIClient(){
    gapi.load('client', ()=>{
      gapi.client.init(environment.gapi)
    })
    
 
  }

  async signOut() {
    await this.afAuth.signOut();
    return this.router.navigate(['/']);
  }

  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.store.doc(`users/${user.uid}`);
    const data:User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName
    };
    return userRef.set(data, { merge: true });
  }
}
