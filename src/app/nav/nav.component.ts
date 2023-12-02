import { Component, OnInit } from '@angular/core';
import { modalService } from '../services/modal.service';

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
