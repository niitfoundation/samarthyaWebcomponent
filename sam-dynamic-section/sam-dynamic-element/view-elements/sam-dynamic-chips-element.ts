import { SamDynamicElementBase } from './../sam-dynamic-element-base';

export class SamDynamicChips extends SamDynamicElementBase<string> {

    //This is a element, which display data in chips
    elemType = 'chips';

    //To render the content need these data to be described as part of the config
    dataDescriptor: {
        dataFieldName: string, //This is the feild, which will contain the data in the passed data object
        info: string, //will be shown as a tooltip, when hovered on the element
    };

    constructor(elementConfig: {
        dataDescriptor?: {
            dataFieldName?: string,
            info?: string
        }
    } = {}) {
        //Pass the config to parent, to initialise default config fields
        super(elementConfig);

        //Below config fields are specific to the iconDiv element type, which are used for rendering the element
        //Take all those variables, which are needed for rendering this type of HTML element 
        this.dataDescriptor.dataFieldName = elementConfig.dataDescriptor.dataFieldName;
        this.dataDescriptor.info = elementConfig.dataDescriptor.info;
    }
}
