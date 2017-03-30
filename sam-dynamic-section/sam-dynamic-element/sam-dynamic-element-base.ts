export class SamDynamicElementBase<T>{
  value: T;
  elemName: string;//key  
  elemLabel: string;//label
  required: boolean;
  order: number;
  elemType: string;//controlType
  dataDescriptor: Object;

  constructor(elementConfig: {
    value?: T,
    elemName?: string,
    elemLabel?: string,
    required?: boolean,
    order?: number,
    elemType?: string,
    dataDescriptor?: Object
  } = {}) {
    this.value = elementConfig.value;
    this.elemName = elementConfig.elemName || '';
    this.elemLabel = elementConfig.elemLabel || '';
    this.required = !!elementConfig.required;
    this.order = elementConfig.order === undefined ? 1 : elementConfig.order;
    this.elemType = elementConfig.elemType || '';
    this.dataDescriptor = elementConfig.dataDescriptor || {};
  }
}
