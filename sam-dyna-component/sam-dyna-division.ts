import { SamDynaElementBase } from './sam-dyna-element-base';

export class SamDynaDiv extends SamDynaElementBase<string> {
    controlType = 'div';

    options: { data: string }[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];

    }
}

export class SamDynaIconDiv extends SamDynaElementBase<string> {
    controlType = 'iconDiv';

    options: { icon: string, data: string }[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];

    }
}

export class SamDynaTitleDiv extends SamDynaElementBase<string> {
    controlType = 'titleDiv';

    options: { title: string, data: string }[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];

    }
}

export class SamDynaChips extends SamDynaElementBase<string> {
    controlType = 'chips';

    options: { name: string, data: string }[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];

    }
}

export class SamDynaLargeDiv extends SamDynaElementBase<string> {
    controlType = 'largeDiv';

    options: { name: string, data: string, color: number }[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];

    }
}
