import { getTestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SamProfileCardService {

  constructor(private http: Http, private router: Router) { }

  public getProfileCard(username: string) {
    let profileData: any;
    return this.http.get('/profile?username=' + username +"&token="+JSON.parse(localStorage.getItem('currentUser'))['token']).map((response: Response) => {
      profileData = response.json();
      profileData = profileData['data'][0];
      let workplace: any;
      let experience: any;
      let role: any;
      let exp: any;
      if (profileData.experiences.length > 0) {
        workplace = profileData.experiences[0]['workplace'];
        let expYear = profileData.experiences[0].duration.end.substr(0, 4) - profileData.experiences[0].duration.start.substr(0, 4);

        exp = expYear * 12 - -profileData.experiences[0].duration.end.substr(5, 2) - profileData.experiences[0].duration.start.substr(5, 2)
        console.log(exp);
        experience = exp + ' mon';
      }
      else {
        experience = '';
        workplace = '';
        experience = '';
      }

      if (profileData.jobPreferences.jobRoles.length > 0) {
        role = profileData.jobPreferences.jobRoles[0].name;
      } else {
        role = '';
      }
      let samCardData = {
        profilepic: profileData.profilePic,
        name: profileData.personalInfo.name,
        regNumber: profileData.personalInfo.identity[1].value,
        center: profileData.centerCode,
        email: profileData.personalInfo.email,
        role: role,
        profession: profileData.profession.toUpperCase(),
        mobileNumber: profileData.personalInfo.contact.I,
        currentCompany: workplace,
        experience: experience,
        skills: profileData.skills,
        location: profileData.personalInfo.address.district + ', ' + profileData.personalInfo.address.pincode,
      };
      return samCardData;
    });
  }
}
