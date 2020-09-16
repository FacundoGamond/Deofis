import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oferts',
  templateUrl: './oferts.component.html',
  styleUrls: ['./oferts.component.scss']
})
export class OfertsComponent implements OnInit {
  public images
  public close: boolean
  constructor() {
    this.close = false;
  }

  ngOnInit(): void {
    this.images = [
      { path: '../../assets/images/1.jpg' },
      { path: '../../assets/images/2.jpg' },
      { path: '../../assets/images/3.jpg' },
      { path: '../../assets/images/4.jpg' },
      { path: '../../assets/images/5.jpg' },
    ]

    if (localStorage.getItem("ofert") == "true") {
      this.close = true
    }
  }

  closeOfert() {
    this.close = true
    localStorage.setItem("ofert", "true")
  }
}
