import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  menuOpen: boolean = false;

  menuData: any = [];
  navbarData: any = {};
  navarbarLogo: string = "";
  contactUsMenu: any = {};

  constructor(
    private _Router: Router,
  ) { }

  ngOnInit(): void {

  }

  OpenMenu() {
    this.menuOpen = true;
  }

  CloseMenu() {
    this.menuOpen = false;
  }

  ToggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  OpenRoute(route: string) {
    this._Router.navigate([route]);
  }

}
