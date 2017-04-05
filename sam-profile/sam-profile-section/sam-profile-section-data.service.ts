import { getTestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {
  constructor(private http: Http, private router: Router) { }

  public getProfile(username: string) {
    let profileData: any;
    return this.http.get('/profile?username=' + username).map((response: Response) => {
      profileData = response.json();
      // console.log(profileData)
      let modifiedData = profileData['data'][0];
      modifiedData['personalInfo']['dob'] = modifiedData['personalInfo']['dob'].substr(0, 10) // modified DATE of BIRTH
      // modifiedData['qualifications'][0]['batch'] = modifiedData['qualifications'][0]['batch'].substr(0, 4) // modified Batch
      console.log(modifiedData);
      if (modifiedData['jobPreferences']['looking']) {
        modifiedData['jobPreferences']['looking'] = 'Looking For Job';
      } else {
        modifiedData['jobPreferences']['looking'] = 'Not Looking For Job';
      }

      modifiedData['personalInfo']['lang'].forEach(lang => {
        if (lang.r === 'true') {
          lang.r = 'Read';
        } else if (lang.r === 'false') {
          lang.r = ''
        }
        if (lang.w === 'true') {
          lang.w = 'Write'
        } else if (lang.w === 'false') {
          lang.w = ''
        } if (lang.s === 'true') {
          lang.s = 'Speak'
        } else if (lang.s === 'false') {
          lang.s = ''
        }
      });
      // console.log(modifiedData);
      return modifiedData;
    });
  }
}
