import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  selectedTab: string = 'signIn';

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }
}
