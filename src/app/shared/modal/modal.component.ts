import { Component, ElementRef, Input, OnDestroy, OnInit } from "@angular/core";
import { modalService } from "src/app/services/modal.service";

@Component({
  selector:'app-modal',
  templateUrl:'./modal.component.html',
  styleUrls:['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy{
  @Input() modalID = ''
  modalContent: any;

  constructor(
    public modal: modalService,
    private el: ElementRef
    ){}

    ngOnInit(): void {
      document.body.appendChild(this.el.nativeElement)
      console.log(this.el.nativeElement)
    }

    ngOnDestroy(): void {
      document.body.appendChild(this.el.nativeElement)
    }

    closeModal(){
      this.modal.toggleModal(this.modalID)
    }
}
