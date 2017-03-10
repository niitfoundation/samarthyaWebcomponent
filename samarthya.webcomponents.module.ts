import {NgModule} from '@angular/core'
import {RouterModule}  from '@angular/router'

import {CandidateAvatar} from './candidates/candidateavatar.component'
import {ProfileComponent} from './profile/profile.component'

@NgModule({
	declarations:[CandidateAvatar,ProfileComponent],
	exports:[CandidateAvatar,ProfileComponent]
})

export class SamarthyaWebComponentsModule { }