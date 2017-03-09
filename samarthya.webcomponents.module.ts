import {NgModule} from '@angular/core'
import {RouterModule}  from '@angular/router'

import {CandidateAvatar} from './candidates/candidateavatar.component'

@NgModule({
	declarations:[CandidateAvatar],
	exports:[CandidateAvatar]
})

export class SamarthyaWebComponentsModule { }