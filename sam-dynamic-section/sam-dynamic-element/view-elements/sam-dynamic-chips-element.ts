import { SamDynamicElementBase } from './../sam-dynamic-element-base';

export class SamDynamicChips extends SamDynamicElementBase<string> {
    controlType = 'chips';

    options: { data: string }[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }
}
