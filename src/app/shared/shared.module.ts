import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { alertComponent } from './alert/alert.component';
import { loadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    alertComponent,
    loadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    alertComponent,
    loadingComponent
  ]
})
export class SharedModule { }
