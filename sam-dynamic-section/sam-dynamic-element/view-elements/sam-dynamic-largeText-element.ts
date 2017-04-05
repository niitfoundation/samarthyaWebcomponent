import { SamDynamicElementBase } from './../sam-dynamic-element-base';

export class SamDynamicLargeText extends SamDynamicElementBase<string> {
    // This is a element, which display data along with a icon
    elemType = 'largeText';

    // To render the content need these data to be described as part of the config
    dataDescriptor: {
        dataFieldName: string, // This is the feild, which will contain the data in the passed data object
        backupText: string  // Will be the icon which will be associated with the content or data
    };

    constructor(elementConfig: {
        dataDescriptor?: {
            dataFieldName?: string,
            backupText?: string
        }
    } = {}) {
        // Pass the config to parent, to initialise default config fields
        super(elementConfig);
        // Below config fields are specific to the iconDiv element type, which are used for rendering the element
        // Take all those variables, which are needed for rendering this type of HTML element 
        this.dataDescriptor.dataFieldName = elementConfig.dataDescriptor.dataFieldName;
        this.dataDescriptor.backupText = elementConfig.dataDescriptor.backupText;
    }
}
