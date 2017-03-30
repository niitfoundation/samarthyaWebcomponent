import { SamDynamicElementBase } from '../sam-dynamic-element/sam-dynamic-element-base';
import { Component, OnInit, Input } from '@angular/core';
import { SamDynamicElementComponent } from '../sam-dynamic-element/sam-dynamic-element.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'sam-dynamic-form-element',
  templateUrl: './sam-dynamic-form-element.component.html',
  styleUrls: ['./sam-dynamic-form-element.component.css']
})

export class SamDynamicFormElementComponent extends SamDynamicElementComponent {
  @Input() elementConfig: SamDynamicElementBase<any>;
  @Input() elementData: Object;
  @Input() title: string;
  @Input() form: FormGroup;

  get isValid() { return this.form.controls[this.elementConfig.elemName].valid; }

  constructor() {
    super();
  }

  // All of functions will come from its parent class --> SamDynamicElementComponent

  public fieldData: any;
  ngOnInit() {
    this.fieldData = this.resolveFieldValue(this.elementData, this.elementConfig.dataDescriptor['dataFieldName']);
  }
}
