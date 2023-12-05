import { GaleriaService } from './../services/galeria.service';
import { Component } from '@angular/core';
import { modalService } from '../services/modal.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  constructor(private modal: modalService, private galeriaService:GaleriaService){}


  // ngOnInit(): void {
  //   this.modal.register('image-details');
  //   this.getUserImage()
  // }

  // getUserImage(){
  //   this.galeriaService.getAllImages().subscribe({
  //     next:(data)=>{
  //       console.log(data)
  //     },
  //     error:(err)=>{
  //       console.log(err)
  //     }
  //   })
  // }

  openModal(e:Event){
    e.preventDefault();
    this.modal.toggleModal('image-details')
  }

}
