import { SamDynamicElementBase } from './../sam-dynamic-element-base';

export class SamDynamicDiv extends SamDynamicElementBase<string> {
    controlType = 'div';

    options: { data: string }[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }
}
