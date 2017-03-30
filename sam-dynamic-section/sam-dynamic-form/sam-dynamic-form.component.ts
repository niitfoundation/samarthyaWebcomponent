import { SamDynamicElementBase } from '../sam-dynamic-element/sam-dynamic-element-base';
import { Component, OnInit, Input, Inject, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SamDynamicFormControlService } from './sam-dynamic-form-control-service';

@Component({
  selector: 'sam-dynamic-form',
  templateUrl: './sam-dynamic-form.component.html',
  styleUrls: ['./sam-dynamic-form.component.css'],
  providers: [SamDynamicFormControlService],
  outputs: ['childEvent']
})
export class SamDynamicFormComponent implements OnInit {

  constructor(private controlService: SamDynamicFormControlService) { }
  // Bind the config in a separate object
  @Input() elementConfigColln: SamDynamicElementBase<any>[] = [];

  // Bind the data for the entire view
  @Input() viewData: Object;

  // Bind the title for the entire view
  @Input() viewTitle: string;

  @Input() alignElement: string;
  form: FormGroup;
  payLoad = '';

  // this will create form group for each sections
  ngOnInit() {
    this.form = this.controlService.toFormGroup(this.elementConfigColln);
  }

  // this will emit child event
  childEvent = new EventEmitter<string>();

  onSubmit() {
    this.childEvent.emit(this.form.value);
  }
}
