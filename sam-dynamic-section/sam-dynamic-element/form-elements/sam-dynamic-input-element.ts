import { SamDynamicElementBase } from './../sam-dynamic-element-base';

export class SamDynamicInput extends SamDynamicElementBase<string> {
  elemType = 'input';

  dataDescriptor: { data: string,label:string }[] = [];

  constructor(dataDescriptor: {} = {}) {
    super(dataDescriptor);
    this.dataDescriptor = dataDescriptor['dataDescriptor'] || [];
  }
}
