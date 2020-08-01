import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { finalize } from 'rxjs/operators';
import { UserAuthService } from './user-auth.service';
import { time } from 'console';

@Injectable({
  providedIn: 'root'
})
export class UploadStorageService {

  constructor(
    private storage : AngularFireStorage,
    private auth: UserAuthService,
    private store: AngularFirestore
  ) {}

  uploadFile(file) {
    const filePath = 'generate-uuid';
    const task = this.storage.upload(filePath, file);
  }

  uploadVideoBlob(blob) {
    // TODO: Add user UUID at front
    const filePath = Date.now()+".webm";
    var file = new File ([blob], filePath, {
      type: 'video/webm'
    });
    var storagePath = "recordings/"+filePath;
    // Use task to keep track of progress or pause
    const fileRef = this.storage.ref(storagePath);
    const task = this.storage.upload(storagePath, file);

    // observe percentage changes
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize( async() =>  {
          const downloadUrl = await fileRef.getDownloadURL().toPromise();
          this.handleDownloadUrl(downloadUrl, storagePath)
        } )
     )
    .subscribe()
  }
  
  handleDownloadUrl(downloadURL:string, storagePath){
    console.log(downloadURL, storagePath)
    // Upload downloadURL to user db
      this.auth.user$.subscribe((user) => {
        if (user){
          console.log(user)
          console.log("Recording added")
          var timeStamp = Date.now();
          this.store.doc(`users/${user.uid}/recordings/${timeStamp}`).set({ downloadURL: downloadURL, path: storagePath})
        } else {
          alert("User not signed in")
      }
    })
  }
}
