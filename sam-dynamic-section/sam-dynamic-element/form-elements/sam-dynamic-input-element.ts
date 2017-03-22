import { SamDynamicElementBase } from './../sam-dynamic-element-base';

export class SamDynamicInput extends SamDynamicElementBase<string> {
  controlType = 'input';

  sectionViewData: { data: string }[] = [];

  constructor(sectionViewData: {} = {}) {
    super(sectionViewData);
    this.sectionViewData = sectionViewData['sectionViewData'] || [];
  }
}
