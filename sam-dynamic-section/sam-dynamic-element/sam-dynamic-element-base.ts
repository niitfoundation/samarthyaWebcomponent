export class SamDynamicElementBase<T>{
  value: T;
  elemName: string;//key  
  elemLabel: string;//label
  required: boolean;
  order: number;
  elemType: string;//controlType
  dataObj: Object;

  constructor(sectionViewData: {
    value?: T,
    elemName?: string,
    elemLabel?: string,
    required?: boolean,
    order?: number,
    elemType?: string,
    dataObj?: Object
  } = {}) {
    this.value = sectionViewData.value;
    this.elemName = sectionViewData.elemName || '';
    this.elemLabel = sectionViewData.elemLabel || '';
    this.required = !!sectionViewData.required;
    this.order = sectionViewData.order === undefined ? 1 : sectionViewData.order;
    this.elemType = sectionViewData.elemType || '';
    this.dataObj = sectionViewData.dataObj || '';
  }
}
