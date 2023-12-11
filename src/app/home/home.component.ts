import { Component, OnInit } from '@angular/core';
import { modalService } from '../services/modal/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private modal: modalService){}

  ngOnInit(): void {

  }


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
