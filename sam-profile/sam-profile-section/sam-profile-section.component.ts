import { SamDynamicIconDiv } from './../../sam-dynamic-section/sam-dynamic-element/view-elements/sam-dynamic-icon-element - ';
import { SamDynamicElementBase } from './../../sam-dynamic-section/sam-dynamic-element/sam-dynamic-element-base';

//import { SamDynamicElementBase } from './../../sam-dyna-component/sam-dyna-element-base';
import { SamProfileSectionService } from './../sam-profile-section.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sam-profile-section',
  templateUrl: './sam-profile-section.component.html',
  styleUrls: ['./sam-profile-section.component.css']
})
export class SamProfileSectionComponent implements OnInit {
elements : any[];
 

    
  constructor() { 
    //call the service and use the elements

  }
  

  ngOnInit() {
    //response from service hard code it.
    this.elements = this.getElements();
   }

  getElements() {

    let elementStandard: SamDynamicElementBase<any>[] = [
      new SamDynamicIconDiv({
        key: this.getPersonalInfo().key,
        label: this.getPersonalInfo().lable,
        order: this.getPersonalInfo().order,
        options: this.getPersonalInfo().options
      })
    ]
      return elementStandard ;
  }
  public userData = {
       
        "personalinfo": {
            "name": "Muruguavel A",
            "fname": "Murugavel",
            "lname": "Annamalai Arasu Chkaravarti Boss Kabali AAA",
            "dob": "11-11-1992",
            "gender": "m",
            "email": "muruga55@gmail.com",
            "altemail": "muruga55@gmail.com",
            "contact": {
                "I": "9988989771",
                "II": "04242425252"
            },
            "address": {
                "loc": "SomeWhere",
            },
            "married": false,
            "identity": [
                {
                    "regno": ""
                },
                {
                    "adhaar": "1212123231"
                }
            ],

            "preflang": "English",
            "nativelang": "Hindi",
            "lang": [
                {
                    "name": "Hindi",
                    "r": true,
                    "w": false,
                    "s": true
                },
                {
                    "name": "English",
                    "r": true,
                    "w": true,
                    "s": false
                }
            ],
            "pic": "http://profilepicurl",
            "center": "",
        }
  }
  getPersonalInfo() {
        return {
            key: "personalinfo",
            lable: "Personal Info",
            order: "2",
            options: [
                { icon: "person", data: this.userData.personalinfo.name },
                { icon: "email", data: this.userData.personalinfo.email },
                { icon: "cake", data: this.userData.personalinfo.dob },
                { icon: "phone", data: this.userData.personalinfo.contact.I + ', ' + this.userData.personalinfo.contact.II },
                { icon: "location_on", data: this.userData.personalinfo.address.loc },
                { icon: "chrome_reader_mode", data: this.userData.personalinfo.identity[1]['adhaar'] },
                { icon: "record_voice_over", data: this.userData.personalinfo.preflang },
            ]
        }
    }
  }



