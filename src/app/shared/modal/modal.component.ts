import { Component, ElementRef, Input, OnDestroy, OnInit } from "@angular/core";
import { modalService } from "src/app/services/modal.service";

@Component({
  selector:'app-modal',
  templateUrl:'./modal.component.html',
  styleUrls:['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy{
  @Input() modalID = '';

  constructor(public modal: modalService, private el: ElementRef) {}

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    document.body.removeChild(this.el.nativeElement);
  }


  closeModal(): void {
    this.modal.toggleModal(this.modalID);
  }

}
