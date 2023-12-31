import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private router:Router){}
  isLogged = false;

  ngOnInit(): void {
  }

  isNavVisible(): boolean {
    return this.router.url !== '/login';
  }
}
