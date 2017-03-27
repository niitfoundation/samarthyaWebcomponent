import { SamDynamicElementBase } from './../sam-dynamic-element-base';

export class SamDynamicTitleDiv extends SamDynamicElementBase<string> {
    //This is a element, which display data along with a title
    elemType = 'title-div';

    //To render the content need these data to be described as part of the config
    dataDescriptor: {
        dataFieldName: string, //This is the feild, which will contain the data in the passed data object
        info: string, //will be shown as a tooltip, when hovered on the element
        title: string  //Will be the title which will be associated with the content or data
    };

    constructor(elementConfig: {
        dataDescriptor?: {
            dataFieldName?: string,
            title?: string,
            info?: string
        }
    } = {}) {
        //Pass the config to parent, to initialise default config fields
        super(elementConfig);

        //Below config fields are specific to the iconDiv element type, which are used for rendering the element
        //Take all those variables, which are needed for rendering this type of HTML element 
        this.dataDescriptor.dataFieldName = elementConfig.dataDescriptor.dataFieldName;
        this.dataDescriptor.title = elementConfig.dataDescriptor.title;
        this.dataDescriptor.info = elementConfig.dataDescriptor.info;
    }
}