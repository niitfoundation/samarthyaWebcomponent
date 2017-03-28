import { SamDynamicElementBase } from './../sam-dynamic-element/sam-dynamic-element-base';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sam-dynamic-form',
  templateUrl: './sam-dynamic-form.component.html',
  styleUrls: ['./sam-dynamic-form.component.css']
})
export class SamDynamicFormComponent implements OnInit {

  constructor() { }
  // Bind the config in a separate object
  @Input() elementConfigColln: SamDynamicElementBase<any>[] = [];

  // Bind the data for the entire view
  @Input() viewData: Object;

  // Bind the title for the entire view
  @Input() viewTitle: string;

  @Input() alignElement: string;

  ngOnInit() {
  }

}
