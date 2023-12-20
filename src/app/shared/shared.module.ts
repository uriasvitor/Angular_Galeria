import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { alertComponent } from './alert/alert.component';
import { loadingComponent } from './loading/loading.component';
import { EventBlockerDirective } from './directives/event-blocker.directive';
import { RandomHeightPipe } from './pipes/randomHeight.pipe';



@NgModule({
  declarations: [
    alertComponent,
    loadingComponent,
    EventBlockerDirective,
    RandomHeightPipe,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    alertComponent,
    loadingComponent,
    EventBlockerDirective,
    RandomHeightPipe
  ]
})
export class SharedModule { }
