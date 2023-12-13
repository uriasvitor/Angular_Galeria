import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { alertComponent } from './alert/alert.component';
import { loadingComponent } from './loading/loading.component';
import { EventBlockerDirective } from './directives/event-blocker.directive';



@NgModule({
  declarations: [
    alertComponent,
    loadingComponent,
    EventBlockerDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    alertComponent,
    loadingComponent,
    EventBlockerDirective
  ]
})
export class SharedModule { }
