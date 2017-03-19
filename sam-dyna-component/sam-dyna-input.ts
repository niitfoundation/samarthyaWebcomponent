import { SamDynaElementBase } from './sam-dyna-element-base';

export class SamDynaInput extends SamDynaElementBase<string> {
  controlType = 'input';
  
  constructor(options: {} = {}) {
    super(options);
  }
}