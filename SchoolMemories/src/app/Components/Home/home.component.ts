import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NzCardModule,
    NzGridModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private _Router: Router) { }

  Navigate(route: string) {
    this._Router.navigateByUrl(route);
  }
}
