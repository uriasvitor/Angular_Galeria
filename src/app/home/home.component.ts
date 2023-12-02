import { Component } from '@angular/core';
import { modalService } from '../services/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private modal: modalService){}


  ngOnInit(): void {
    this.modal.register('image-details');
  }


  openModal(e:Event){
    e.preventDefault();
    this.modal.toggleModal('image-details')
  }
}
