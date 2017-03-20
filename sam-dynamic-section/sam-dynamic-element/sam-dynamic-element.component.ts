import { SamDynamicElementBase } from './sam-dynamic-element-base';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sam-dynamic-element',
  templateUrl: './sam-dynamic-element.component.html',
  styleUrls: ['./sam-dynamic-element.component.css']
})
export class SamDynamicElementComponent implements OnInit {
  @Input() element: SamDynamicElementBase<any>;
  constructor() { }

  ngOnInit() {
  }
  public getElement(card:any) {
    console.log(card);
  }

}
