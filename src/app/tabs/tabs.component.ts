import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit{
  @Input() selectedTab: string = '';


  ngOnInit(): void {
    this.selectedTab = 'signIn'
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

}
