import { SamDynamicElementBase } from './../../sam-dynamic-section/sam-dynamic-element/sam-dynamic-element-base';
import { SamDynamicLabel } from './../../sam-dynamic-section/sam-dynamic-form-element/form-elements/sam-dynamic-label-element';
import { SamDynamicInput } from './../../sam-dynamic-section/sam-dynamic-form-element/form-elements/sam-dynamic-input-element';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'sam-profile-section-form',
  templateUrl: './sam-profile-section-form.component.html',
  styleUrls: ['./sam-profile-section-form.component.css'],
  outputs: ['childEvent']
})

export class SamProfileSectionFormComponent implements OnInit {

  // This will contains all the required config to render the elements
  // this will be mapped to elementconfigColln of SamDynamicViewComponent
  @Input() sectionFieldConfig: any[] = [];

  // this have all the data which we going to provide to elements
  // this will be mapped to element view data of SamDynamicViewComponent
  @Input() sectionData: Object;

  // this is the title for the section we are rendering
  // this will be mapped to view title fo SamDynamicViewComponent
  @Input() sectionTitle: string;

  // this is for alignment of data in this section
  @Input() alignElement: string;

  constructor() { }

  sectionElements: SamDynamicElementBase<any>[] = [];


  private elementBuilders = {
    'label': function (configObj: any) {
      return new SamDynamicLabel(configObj);
    },
    'input': function (configObj: any) {
      return new SamDynamicInput(configObj);
    }
  };

  ngOnInit() {
    this.initializeSectionElements();
  }

  initializeSectionElements() {
    this.sectionElements = this.sectionFieldConfig['fields'].map(
      (fieldConfigObj: any) => {
        let elementBuilderClosure = this.elementBuilders[fieldConfigObj.elemType];
        if (elementBuilderClosure) {
          return elementBuilderClosure(fieldConfigObj);
        }
      }
    );
  }

  // this will create a new child event
  childEvent = new EventEmitter<string>();

  // this will send the child event data to parent
  sendFormData($event: any) {
    let formObj = $event;
    this.childEvent.emit(formObj);
  }
}
