import { SamDynamicElementBase } from './../sam-dynamic-element-base';

export class SamDynamicLabel extends SamDynamicElementBase<string> {
  controlType = 'label';

  sectionViewData: { data: string }[] = [];

  constructor(sectionViewData: {} = {}) {
    super(sectionViewData);
    this.sectionViewData = sectionViewData['sectionViewData'] || [];
  }
}
