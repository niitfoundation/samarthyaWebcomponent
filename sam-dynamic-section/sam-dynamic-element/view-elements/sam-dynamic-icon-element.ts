import { SamDynamicElementBase } from './../sam-dynamic-element-base';

export class SamDynamicIconDiv extends SamDynamicElementBase<string> {
    elemType = 'iconDiv';

    dataObj: { icon: string, data: string, info: string }[] = [];

    constructor(dataObj: {} = {}) {
        super(dataObj);
        this.dataObj = dataObj['dataObj'] || [];
    }
}
