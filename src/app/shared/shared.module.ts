import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { alertComponent } from './alert/alert.component';



@NgModule({
  declarations: [
    alertComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    alertComponent
  ]
})
export class SharedModule { }
