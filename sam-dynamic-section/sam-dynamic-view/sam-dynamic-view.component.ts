import { SamDynamicElementBase } from './../sam-dynamic-element/sam-dynamic-element-base';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sam-dynamic-view',
  templateUrl: './sam-dynamic-view.component.html',
  styleUrls: ['./sam-dynamic-view.component.css']
})
export class SamDynamicViewComponent implements OnInit {

  constructor() { }
  //Bind the config in a separate object
  @Input() elementConfigColln: SamDynamicElementBase<any>[] = [];

  //Bind the data for the entire view
  @Input() viewData: Object;

  //Bind the title for the entire view
  @Input() viewTitle:string;

  @Input() alignElement: string;

  ngOnInit() {
  }

}
