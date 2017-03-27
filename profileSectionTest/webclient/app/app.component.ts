import { Component, OnInit } from '@angular/core';
import { Logger } from 'angular2-logger/core';
import { } from 'jasmine';
import { ProfileService } from './services/profile.service';
import { SamProfileCardService } from './services/sam-profile-card.service';
import { SamProfileSectionConfigService } from './services/sam-profile-section-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   providers: [
    ProfileService,
    SamProfileCardService,
    SamProfileSectionConfigService
  ],
})
export class AppComponent {
  profileSections: any[];
  profileData: Object;
  sectionsEdit: any[];
  profileCardData: any;
  profileConfig: any;

  constructor(
    // service for getting data for profile sections
    private SamProfileService: ProfileService,
    //Service for getting rendering config of profile sections
    private SamProfileSectionConfigService: SamProfileSectionConfigService,
    // service for providing sam profile card
    // private SamProfileCardService: SamProfileCardService
  ) {
    // this will get the data for profile section according to usename
    this.profileData = SamProfileService.getProfileData('username');

    // this will get the data for profile card according to username
    // this.profileCardData = SamProfileCardService.getProfileCardData();

    // this will get the data for profile config
    this.profileConfig = SamProfileSectionConfigService.getProfileSectionConfig();
    // remove hardcodding
    this.profileSections = [
      { 'name': 'personalInfo', 'title': 'Personal Informations', 'align': 'column' },
      // { 'name': 'skills', 'title': 'Skills Informations' }
    ];
  }

  ngOnInit() { }

  // this will provide section config for perticular sections from profile config section
  getSectionConfig(sectionName: string) {
    return this.profileConfig[sectionName];
  }

  // this will provide section data for perticular sections from profile service
  getSectiondata(sectionName: string) {
    return this.profileData[sectionName];
  }
}

