import { SamDynamicElementComponent } from './sam-dynamic-section/sam-dynamic-element/sam-dynamic-element.component';
import { SamDynamicViewComponent } from './sam-dynamic-section/sam-dynamic-view/sam-dynamic-view.component';
import { SamProfileSectionComponent } from './sam-profile/sam-profile-section/sam-profile-section.component';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { CandidateAvatar } from './candidates/candidateavatar.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Md2Module } from 'md2';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		MaterialModule.forRoot(),
		Md2Module.forRoot(),
		ReactiveFormsModule,
		FlexLayoutModule,
	],
	declarations: [
		CandidateAvatar,
		ProfileComponent,
		SamProfileSectionComponent,
		SamDynamicViewComponent,
		SamDynamicElementComponent
	],
	exports: [
		CandidateAvatar,
		ProfileComponent,
		SamProfileSectionComponent,
		SamDynamicViewComponent,
		SamDynamicElementComponent
	]
})

export class SamarthyaWebComponentsModule { }
