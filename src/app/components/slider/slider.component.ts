import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  public images
  constructor() { }

  ngOnInit(): void {
    this.images = [
      { path: '../../assets/images/7.jpg' },
      { path: '../../assets/images/8.jpg' },
      { path: '../../assets/images/6.jpg' }
    ]
  }

}
