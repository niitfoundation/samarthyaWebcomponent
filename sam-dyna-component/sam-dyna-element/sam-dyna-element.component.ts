import { Component, Input, OnInit } from '@angular/core';
import { SamDynaElementBase } from '../sam-dyna-element-base';

@Component({
  selector: 'app-sam-dyna-element',
  templateUrl: './sam-dyna-element.component.html',
  styleUrls: ['./sam-dyna-element.component.css']
})
export class SamDynaElementComponent implements OnInit {

  @Input() element: SamDynaElementBase<any>;

  constructor() { }

  ngOnInit() {
  }

}
