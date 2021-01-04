import { Component, OnInit, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public openedSideNav: boolean;
  public innerWidth: any;

  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth

    if (this.innerWidth <=760) {
      this.openedSideNav = false;
    } else {
      this.openedSideNav = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onresize(event) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <=760) {
      this.openedSideNav = false;
    } else {
      this.openedSideNav = true;
    }
  }
}
