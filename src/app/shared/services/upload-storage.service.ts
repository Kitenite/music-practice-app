import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
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
    
    const fileRef = this.storage.ref(storagePath);
    const task = this.storage.upload(storagePath, file);
    task.snapshotChanges().pipe(
        finalize( async() =>  {
          const downloadUrl = await fileRef.getDownloadURL().toPromise();
          this.addRecordingToDB(downloadUrl, storagePath)
        } )
     )
    .subscribe()
  }
  
  addRecordingToDB(downloadURL:string, storagePath){
    this.auth.user$.subscribe((user) => {
      if (user){
        var timeStamp = Date.now();
        this.store.doc(`users/${user.uid}/recordings/${timeStamp}`).set({ downloadURL: downloadURL, path: storagePath})
      } else {
        alert("User not signed in")
      }
    })
  }
}
