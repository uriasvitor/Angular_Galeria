import { Component, OnInit } from '@angular/core';
import { modalService } from '../services/helpers/modal.service';
import { UploadComponent } from '../image/upload/upload.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
  constructor(private modal: modalService){}


  ngOnInit(): void {
    this.modal.register('upload');
  }


  openModal(e:Event){
    e.preventDefault();
    this.modal.toggleModal('upload')
  }
}
