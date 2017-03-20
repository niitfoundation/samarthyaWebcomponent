import { SamDynamicElementBase } from './../sam-dynamic-element-base';

export class SamDynamicIconDiv extends SamDynamicElementBase<string> {
    controlType = 'iconDiv';

    options: { icon: string, data: string }[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }
}
