import { SamDynamicElementBase } from './../../sam-dynamic-section/sam-dynamic-element/sam-dynamic-element-base';
import { SamDynamicIconDiv } from './../../sam-dynamic-section/sam-dynamic-element/view-elements/sam-dynamic-iconDiv-element';
import { SamDynamicTitleDiv } from './../../sam-dynamic-section/sam-dynamic-element/view-elements/sam-dynamic-titleDiv-element';
import { SamDynamicDiv } from './../../sam-dynamic-section/sam-dynamic-element/view-elements/sam-dynamic-textDiv-element';
import { SamDynamicChips } from './../../sam-dynamic-section/sam-dynamic-element/view-elements/sam-dynamic-chips-element';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sam-profile-section',
  templateUrl: './sam-profile-section.component.html',
  styleUrls: ['./sam-profile-section.component.css']
})

export class SamProfileSectionComponent implements OnInit {

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

  sectionElements: SamDynamicElementBase<any>[] = [];

  private elementBuilders = {
    'icon-div': function (configObj: any) {
      return new SamDynamicIconDiv(configObj);
    },
    'title-div': function (configObj: any) {
      return new SamDynamicTitleDiv(configObj);
    },
    'text-div': function (configObj: any) {
      return new SamDynamicDiv(configObj);
    },
    'chips': function (configObj: any) {
      return new SamDynamicChips(configObj);
    }
  };

  constructor() {
  }

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


}
