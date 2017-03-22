import { SamDynamicElementBase } from './../sam-dynamic-element-base';

export class SamDynamicDiv extends SamDynamicElementBase<string> {
    elemType = 'div';

    dataObj: { data: string }[] = [];

    constructor(dataObj: {} = {}) {
        super(dataObj);
        this.dataObj = dataObj['dataObj'] || [];
    }
}
