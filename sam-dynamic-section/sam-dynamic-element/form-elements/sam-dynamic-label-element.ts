import { SamDynamicElementBase } from './../sam-dynamic-element-base';

export class SamDynamicLabel extends SamDynamicElementBase<string> {
  elemType = 'label';

  dataDescriptor: { label: string }[] = [];

  constructor(dataDescriptor: {} = {}) {
    super(dataDescriptor);
    this.dataDescriptor = dataDescriptor['dataDescriptor'] || [];
   }
}
