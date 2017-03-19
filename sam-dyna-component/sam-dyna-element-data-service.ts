import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { RequestOptions, Request, RequestMethod } from '@angular/http';

@Injectable()
export class SamDynaElementDataService {

    constructor(private http: Http) { }

    public userData = {
        "username": "",
        "profession": "",
        "createdOn": "Date",
        "createdBy": "",
        "updatedOn": "",
        "updatedBy": "",
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
        },
        "qualifications": [
            {
                "name": "BE",
                "subject": "electronics",
                "academictype": "Graduation",
                "batch": "2012",
                "result": { "score": "85", "unit": "%age" },
                "institute": "ABC College Of Tech",
                "affiliation": "ABC University",
                "location": "SomeWhere"
            },
            {
                "name": "ME",
                "level": "Post Graduation",
                "yr": "2016",
                "percentage": "95",
                "institute": "ABC College Of Tech",
                "affiliatedBy": "ABC University",
                "loc": "SomeWhere"
            }
        ],
        "preferences": {
            "looking": true,
            "roles": [
                {
                    "name": "FrontEndDeveloper",
                    "engagement": "full",
                    "expectedSal": { "min": "", "max": "" },
                    "skills": ["MEAN"],
                    "availableFrom": "12-12-2017",
                    "locations": []
                }
            ]
        },
        "experiences": [
            {
                "workplace": "TCS",
                "designation": "",
                "role": "SoftwareDeveloper",
                "duration": { "start": "", "end": "" },
                "location": "Pune",
                "skills": [
                    "java",
                    "HTML",
                    "Angular2"
                ]
            }
        ],
        "skills": [
            {
                "name": "java",
                "experience": "2",
                "expertise": "skilled"
            },
            {
                "name": ".net",
                "experience": "1",
                "expertise": "fresher"
            },
            {
                "name": "Angular.io",
                "experience": "1",
                "expertise": "fresher"
            },
            {
                "name": "React",
                "experience": "1",
                "expertise": "expert"
            }
        ],
        "projects": [
            {
                "name": "Digital",
                "description": "",
                "duration": { "start": "", "end": "" },
                "location": "bangalore",
                "skills": [
                    "Java",
                    ".net"
                ],
                "role": "Team Lead",
            }
        ],
        "showcase": [
            {
                "contenttype": "image/vidieo/link",
                "title": "Facebook_url",
                "url": "www.facebook.com/gowthamjeeva",
                "desc": "short description"
            },
            {
                "title": "Linkedin_url",
                "url": "www.linkedin.com/gowthamjeeva",
                "desc": "short description"
            },
            {
                "title": "video",
                "url": "Amazon server url",
                "desc": "short description"
            }
        ],
        status: true
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

    getSummary() {
        return {
            key: "summary",
            lable: "Summary",
            info:"status",
            order: "1",
            options:
            [
                { data: 'I am a front end developer.I have an experience of 5 years in this profession.' }
            ]
        }
    }

    getSkills() {
        let skills = [];
        this.userData.skills.forEach(element => {
            skills.push({ name: element.name, data: element.experience })
        });

        return {
            key: "skills",
            lable: "Skills",
            order: "2",
            options: skills
        }
    }

    //     getProjects(){
    // [{title:this.userData.projects[]}]
    //     }

    //     "projects": [
    //             {
    //                 "name": "Digital",
    //                 "description": "",
    //                 "duration": { "start": "", "end": "" },
    //                 "location": "bangalore",
    //                 "skills": [
    //                     "Java",
    //                     ".net"
    //                 ],
    //                 "role": "Team Lead",
    //             }
    //         ],
}