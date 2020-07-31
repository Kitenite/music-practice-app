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
    return this.storage.upload(storagePath, file);
  }
  
  handleUploadTask(uploadTask){
    uploadTask.on('state_changed', function(snapshot){
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case this.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case this.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
      }
    }, function(error) {
      alert(error)
    }, function() {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        console.log('File available at', downloadURL);
      });
    });
  }
}
