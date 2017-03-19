import { SamDynamicElementComponent } from './sam-dynamic-section/sam-dynamic-element/sam-dynamic-element.component';
import { SamDynamicViewComponent } from './sam-dynamic-section/sam-dynamic-view/sam-dynamic-view.component';
import { SamProfileSectionComponent } from './sam-profile/sam-profile-section.component';
import {NgModule} from '@angular/core'
import {RouterModule}  from '@angular/router'

import {CandidateAvatar} from './candidates/candidateavatar.component'
import {ProfileComponent} from './profile/profile.component'


@NgModule({
	declarations:[CandidateAvatar,ProfileComponent,SamProfileSectionComponent,SamDynamicViewComponent,SamDynamicElementComponent],
	exports:[CandidateAvatar,ProfileComponent,SamProfileSectionComponent,SamDynamicViewComponent,SamDynamicElementComponent]
})

export class SamarthyaWebComponentsModule { }