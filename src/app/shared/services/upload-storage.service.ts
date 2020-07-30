import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class UploadStorageService {

  constructor(
    private storage : AngularFireStorage
  ) { }

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

    const task = this.storage.upload(storagePath, file);
  }
}
