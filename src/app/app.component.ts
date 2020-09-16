import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'deofis';
  public productsSideBar: Array<any>;

  constructor() {
    this.productsSideBar = [];
  }

  getMarca(event) {
    this.productsSideBar = event;
  }
}
