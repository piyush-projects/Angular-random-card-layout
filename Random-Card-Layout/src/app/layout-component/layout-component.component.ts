import { Component, OnInit } from '@angular/core';
import { Controls } from '../../shared/controls.service'

@Component({
  selector: 'app-layout-component',
  templateUrl: './layout-component.component.html',
  styleUrls: ['./layout-component.component.scss']
})
export class LayoutComponentComponent implements OnInit {
  public availableColors: Object[];

  constructor(
    private controls: Controls
  ) { }

  ngOnInit(): void {
    this.availableColors = this.controls.getColors();
  }

  getBackgroundColor(availableColor) {
    debugger;
    if (window.screen.width > 375) {
      return availableColor.color
    } else {
      return `linear-gradient(to left, #fff 95%, ${availableColor.color} 5%)`
    }

  }




}
