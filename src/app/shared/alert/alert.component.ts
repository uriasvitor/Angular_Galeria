import { Component, Input } from "@angular/core";


@Component({
  selector:'app-alert',
  templateUrl:'./alert.component.html',
  styleUrls:['./alert.component.scss']
})
export class alertComponent {
  @Input() color = 'blue'

}
