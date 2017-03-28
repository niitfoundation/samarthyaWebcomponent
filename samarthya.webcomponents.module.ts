import { SamDynamicElementComponent } from './sam-dynamic-section/sam-dynamic-element/sam-dynamic-element.component';
import { SamDynamicViewComponent } from './sam-dynamic-section/sam-dynamic-view/sam-dynamic-view.component';
import { SamDynamicFormComponent } from './sam-dynamic-section/sam-dynamic-form/sam-dynamic-form.component';
import { SamProfileSectionComponent } from './sam-profile/sam-profile-section/sam-profile-section.component';
import { SamProfileSectionFormComponent } from './sam-profile/sam-profile-section-form/sam-profile-section-form.component';
import { SamProfileCardComponent } from './sam-profile/sam-profile-card/sam-profile-card.component';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
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
		SamProfileSectionComponent,
		SamDynamicViewComponent,
		SamDynamicFormComponent,
		SamDynamicElementComponent,
		SamProfileCardComponent,
		SamProfileSectionFormComponent
	],
	exports: [
		SamProfileSectionComponent,
		SamDynamicViewComponent,
		SamDynamicFormComponent,
		SamDynamicElementComponent,
		SamProfileCardComponent,
		SamProfileSectionFormComponent
	]
})

export class SamarthyaWebComponentsModule { }
