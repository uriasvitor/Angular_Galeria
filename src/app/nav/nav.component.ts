import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { modalService } from '../services/modal/modal.service';
import { UploadComponent } from '../image/upload/upload.component';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
  constructor(private modal: modalService, private auth:AuthService, private router:Router){}


  ngOnInit(): void {
    this.modal.register('upload');
  }


  openModal(e:Event){
    e.preventDefault();
    this.modal.toggleModal('upload')
  }

  logOut(e:Event){
    e.preventDefault()
    this.auth.logOut()
    this.router.navigate(['/login']);
  }
}
