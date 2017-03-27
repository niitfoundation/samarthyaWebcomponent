import { SamDynamicElementBase } from './../sam-dynamic-element-base';

export class SamDynamicDiv extends SamDynamicElementBase<string> {

    //This is a element, which display only for text
    elemType = 'text-div';

    //To render the content need these data to be described as part of the config
    dataDescriptor: {
        // both of them are optional you can give any one of them
        dataFieldName: string ////Will be the data for rendering
        label: string  //Will be the Label if u want to display key info in BOLD
    };

    constructor(elementConfig: {
        dataDescriptor?: {
            label?: string
            dataFieldName?: string
        }
    } = {}) {
        //Pass the config to parent, to initialise default config fields
        super(elementConfig);

        //Below config fields are specific to the iconDiv element type, which are used for rendering the element
        //Take all those variables, which are needed for rendering this type of HTML element 
        this.dataDescriptor.label = elementConfig.dataDescriptor.label;
        this.dataDescriptor.dataFieldName = elementConfig.dataDescriptor.dataFieldName;
    }
}
