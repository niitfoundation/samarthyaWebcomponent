import { SamDynamicElementBase } from './../sam-dynamic-element-base';

export class SamDynamicChips extends SamDynamicElementBase<string> {
    elemType = 'chips';

    dataObj: { name: string, data: string }[] = [];

    constructor(dataObj: {} = {}) {
        super(dataObj);
        this.dataObj = dataObj['dataObj'] || [];
    }
}
