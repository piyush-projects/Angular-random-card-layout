import { Component, OnInit } from '@angular/core';
import { Controls } from '../../shared/controls.service';

@Component({
  selector: 'app-function-component',
  templateUrl: './function-component.component.html',
  styleUrls: ['./function-component.component.scss']
})
export class FunctionComponentComponent implements OnInit {

  constructor(
    private controls: Controls
  ) { }

  ngOnInit(): void {
  }

  sort() {
    this.controls.sort();
  };

  shuffle() {
    this.controls.randomize();
  };

}
