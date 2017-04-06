import { SamDynamicElementBase } from './sam-dynamic-element-base';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sam-dynamic-element',
  templateUrl: './sam-dynamic-element.component.html',
  styleUrls: ['./sam-dynamic-element.component.css']
})

export class SamDynamicElementComponent implements OnInit {
  @Input() elementConfig: SamDynamicElementBase<any>;
  @Input() elementData: Object;
  @Input() title: string;

  constructor() { }

  protected fieldResolvers = {
    'flat': this.flatFieldResolver,
    'composite': this.compositeFieldResolver,
    'nested': this.nestedFieldResolver,
    'nestedArrey': this.nestedArrayFieldResolver,
    'collArray': this.collArrayFieldResolver,
    'nestedCollArray': this.nestedCollArrayFieldResolver,
    'collObj': this.collObjFieldResolver
  };

  public fieldData: any;
  ngOnInit() {
    this.fieldData = this.resolveFieldValue(this.elementData, this.elementConfig.dataDescriptor['dataFieldName']);
  }

  // for simple field whre only flat data field available
  protected flatFieldResolver(elementData: Object, fieldName: any) {
    return elementData[fieldName];
  }

  // this is for section starts with an array
  protected collArrayFieldResolver(elementData: any, fieldName: any) {
    //  this code can be use to make diff-2 arrays for data

    // return elementData[fieldName];
    // let fieldDataObj = {};
    // let fieldDataArray: any = [];
    // elementData.forEach((elemData: any) => {
    //   fieldName.fields.forEach((elemName: any) => {
    //     fieldDataArray.push(elemData[elemName]);
    //   });
    // });

    // for (let j = 0; j < fieldName.fields.length; j++) {
    //   fieldDataObj[fieldName.fields[j]] = [];

    //   for (let i = j; i < fieldDataArray.length; i += 3) {
    //     fieldDataObj[fieldName.fields[j]].push(fieldDataArray[i]);
    //   }
    // }

    // console.log(fieldDataObj);
    let elementDataArray: any[] = [];
    elementData.forEach((elemData: any) => {
      let arr: any = [];
      for (let key in elemData) {
        fieldName.fields.forEach((field: any) => {
          if (field === key && elemData.hasOwnProperty(key)) {
            arr.push(elemData[key]);
          }
        });
      }
      // If the array is comming reverse just toggle this
      elementDataArray.push(arr);
    });
    return elementDataArray
    // return fieldDataArray;
  }

  // this is for nested array collections
  protected nestedCollArrayFieldResolver(elementData: any, fieldName: any) {
    elementData = elementData[fieldName.location];
    let elementDataArray: any[] = [];
    elementData.forEach((elemData: any) => {
      let arr: any = [];
      // arr.push(fieldName.title)
      for (let key in elemData) {
        fieldName.fields.forEach((field: any) => {
          if (field === key && elemData.hasOwnProperty(key)) {
            arr.push(elemData[key]);
          }
        });
      }
      elementDataArray.push(arr);
    });
    // console.log(fieldName);
    // console.log(elementDataArray);
    return elementDataArray
  }

  // this is for section starts with an Object with collection
  protected collObjFieldResolver(elementData: any, fieldName: any) {
    elementData = elementData[fieldName.location];
    let elementDataArray: any[] = [];
    let arr: any = [];
    arr.push(fieldName.title)
    for (let key in elementData) {
      // console.log(key);
      fieldName.fields.forEach((field: any) => {
        if (field === key && elementData.hasOwnProperty(key)) {
          arr.push(elementData[key]);
        }
      });
    }
    elementDataArray.push(arr);
    return elementDataArray
  }



  // for composite fields where two or more data fields are requied
  protected compositeFieldResolver(elementData: Object, fieldName: any) {
    let data = '';
    let delim = (fieldName.delimiter || '');

    // Pick the data composite way
    fieldName.fields.forEach(function (fieldname: any) {
      data += elementData[fieldname] + delim;
    });
    return data;
  }

  // for nested data field like objects of datafield
  protected nestedFieldResolver(elementData: Object, fieldName: any) {
    let data = elementData;
    // Pick the data nested way
    fieldName.fields.forEach(function (fieldname: any) {
      data = data[fieldname];
      // console.log(data);
    });
    return data;
  }

  protected nestedArrayFieldResolver(elementData: Object, fieldName: any) {
    let data = elementData;
    for (let i = 0; i < fieldName.fields.length; i++) {
      data = data[fieldName.fields[i]];
    }
    return data;
  }

  protected resolveFieldValue(elementData: any, fieldName: any) {
    if ((typeof fieldName) === 'object') {
      return this.fieldResolvers[fieldName.type](elementData, fieldName);
    } else {
      return this.flatFieldResolver(elementData, fieldName);
    }
  }
}
