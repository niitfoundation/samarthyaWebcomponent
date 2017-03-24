import { SamDynamicElementBase } from './../sam-dynamic-element/sam-dynamic-element-base';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sam-dynamic-view',
  templateUrl: './sam-dynamic-view.component.html',
  styleUrls: ['./sam-dynamic-view.component.css']
})
export class SamDynamicViewComponent implements OnInit {

  constructor() { }
  @Input() elements: SamDynamicElementBase<any>[] = [];
  @Input() alignElement: string;

  ngOnInit() {
  }

}
