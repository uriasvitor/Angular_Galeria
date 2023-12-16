import { AuthService } from './../../services/auth/auth.service';
import { UploadService} from './../../services/upload/upload.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  isDragover = false;
  file: File | null = null;
  fileUrl: string | null = null;
  nextStage = false;

  ngOnInit(): void {
  }

  constructor(private uploadService:UploadService, private authService:AuthService){}

  title = new FormControl('',{
    validators:[
      Validators.required,
      Validators.minLength(3)
    ],
    nonNullable: true
  })

  uploadForm = new FormGroup({
    title: this.title
  })

  storeFile($event:Event){
    $event?.preventDefault()

    this.isDragover = false;
    this.file = ($event as DragEvent).dataTransfer ?
    ($event as DragEvent).dataTransfer?.files.item(0) ?? null :
    ($event.target as HTMLInputElement).files?.item(0) ?? null

    console.log($event)
    console.log(this.file)

    if(!this.file || !this.file.type.startsWith('image/')) {
      return
    }

    this.title.setValue(
      this.file.name.replace(/\.[^/.]+$/, '')
    )

    this.nextStage = true;

    this.fileUrl = URL.createObjectURL(this.file)
  }

  removeImage($event:Event){
    $event.preventDefault()
    this.fileUrl = ''
    this.nextStage = false;
  }

  uploadFile(){
    this.uploadService.getAllImages().subscribe({
      next:(data)=>{
        console.log(data)
      }
    })

  }

}
