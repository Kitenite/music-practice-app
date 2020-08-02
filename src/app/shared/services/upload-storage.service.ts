import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { finalize } from 'rxjs/operators';
import { UserAuthService } from './user-auth.service';
import { throwError } from 'rxjs';
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class UploadStorageService {

  constructor(
    private storage : AngularFireStorage,
    private auth: UserAuthService,
    private store: AngularFirestore
  ) {}

  async uploadVideoBlob(blob) {
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
          this.addRecordingToDB(downloadUrl, storagePath).catch((err)=> throwError(err))
        })
     )
    .subscribe()
  }
  
  async addRecordingToDB(downloadURL:string, storagePath){
    this.auth.user$.subscribe((user) => {
      if (user){
        var timeStamp = Date().toString();
        this.store.doc(`users/${user.uid}/recordings/${timeStamp}`).set({ downloadURL: downloadURL, path: storagePath}).catch(()=> throwError("Upload failed"))
      } else {
        throwError("User not signed in")
      }
    })
  }
}
