import { Injectable, OnDestroy } from "@angular/core";

interface IModal {
  id:string,
  visible:boolean
}

@Injectable({
  providedIn:"root"
})
export class modalService {
  private modals: IModal[] =[]

  constructor(){}

  register(id:string){
    console.log()
    this.modals.push({
      id,
      visible:false
    })
  }

  unregister(id:string){
    this.modals = this.modals.filter(
      element => element.id !== id
    )
  }

  isModalOpen(id: string) : boolean {
    console.log(id)
    return !!this.modals.find(element => element.id === id)?.visible
  }

  toggleModal(id:string){
   const modal = this.modals.find(element => element.id === id)
   console.log(modal)
    if(modal) {
      modal.visible = !modal.visible
      console.log(modal)
    }
  }

}
