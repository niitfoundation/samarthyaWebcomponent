import { SamDynamicElementBase } from '../sam-dynamic-element/sam-dynamic-element-base';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SamDynamicFormControlService } from './sam-dynamic-form-control-service';

@Component({
  selector: 'sam-dynamic-form',
  templateUrl: './sam-dynamic-form.component.html',
  styleUrls: ['./sam-dynamic-form.component.css'],
  providers: [SamDynamicFormControlService]
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

  ngOnInit() {
    this.form = this.controlService.toFormGroup(this.elementConfigColln);
  }
  onSubmit() {
    console.log('submit called : ', this.form.value)
    this.payLoad = JSON.stringify(this.form.value);
  }

}
