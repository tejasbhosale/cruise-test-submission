import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.css']
})
export class NavComponentComponent implements OnInit {

  public isActive: boolean = true;

  constructor() { }

  ngOnInit() {
  }
  toggle() {
    this.isActive = !this.isActive;
  }
}
