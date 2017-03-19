import { Injectable, OnInit } from '@angular/core';
import { SamDynaElementBase } from './sam-dyna-element-base';
import { SamDynaTitleDiv, SamDynaIconDiv, SamDynaChips, SamDynaDiv } from './sam-dyna-division';
import { SamDynaInput } from './sam-dyna-input';
import { SamDynaElementDataService } from './sam-dyna-element-data-service';

@Injectable()
export class SamDynaElementService {

  constructor(private SamDynaElementDataService: SamDynaElementDataService) { }

  getElements() {

    let elementStandard: SamDynaElementBase<any>[] = [
      new SamDynaIconDiv({
        key: this.SamDynaElementDataService.getPersonalInfo().key,
        label: this.SamDynaElementDataService.getPersonalInfo().lable,
        order: this.SamDynaElementDataService.getPersonalInfo().order,
        options: this.SamDynaElementDataService.getPersonalInfo().options
      }),

      new SamDynaChips({
        key: this.SamDynaElementDataService.getSkills().key,
        label: this.SamDynaElementDataService.getSkills().lable,
        order: this.SamDynaElementDataService.getSkills().order,
        options: this.SamDynaElementDataService.getSkills().options
      }),

      new SamDynaDiv({
        key: this.SamDynaElementDataService.getSummary().key,
        info: this.SamDynaElementDataService.getSummary().info,
        label: this.SamDynaElementDataService.getSummary().lable,
        order: this.SamDynaElementDataService.getSummary().order,
        options: this.SamDynaElementDataService.getSummary().options
      }),
    ];

    return elementStandard.sort((a, b) => a.order - b.order);
  }
}