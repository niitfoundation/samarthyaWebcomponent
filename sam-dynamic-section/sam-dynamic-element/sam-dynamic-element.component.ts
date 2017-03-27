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

  private fieldResolvers = {
    'flat': this.flatFieldResolver,
    'composite': this.compositeFieldResolver,
    'nested': this.nestedFieldResolver,
    // 'nestedArrey': this.nestedArrayFieldResolver
  };

  ngOnInit() { }

  // for simple field whre only flat data field available
  private flatFieldResolver(elementData: Object, fieldName: any) {
    return elementData[fieldName];
  }

  // for composite fields where two or more data fields are requied
  private compositeFieldResolver(elementData: Object, fieldName: any) {
    let data = '';
    let delim = (fieldName.delimiter || '');

    //Pick the data composite way
    fieldName.fields.forEach(function (fieldname: any) {
      data += elementData[fieldname] + delim;
    });

    return data;
  }

  // for nested data field like objects of datafield
  private nestedFieldResolver(elementData: Object, fieldName: any) {
    let data = elementData;

    //Pick the data nested way
    fieldName.fields.forEach(function (fieldname: any) {
      data = data[fieldname];
      // console.log(data);
    });

    return data;
  }


  // private nestedArrayFieldResolver(elementData: Object, fieldName: any) {
  //   //  console.log("elementData : ",elementData);
  //   //  console.log('====================================');

  //   //  fieldName.fields[0]='address[0]';
  //   //  console.log('fieldName : ',fieldName.fields);
  //   let data = elementData;
  //   console.log( data[fieldName.fields[0]][0]);

  //   //Pick the data nested way
  //   fieldName.fields.forEach(function (fieldname: any) {
  //     data = data[fieldname];
  //     // console.log('---------------------------------------------------------------')
  //     // console.log(data[0]);
  //     // data = data[0];
  //     // console.log(fieldname)
  //     // console.log('---------------------------------------------------------------')
  //   });
  //   return data;
  // }

  resolveFieldValue(elementData: any, fieldName: any) {
    if ((typeof fieldName) === 'object') {
      return this.fieldResolvers[fieldName.type](elementData, fieldName);
    } else {
      return this.flatFieldResolver(elementData, fieldName);
    }
  }
}
