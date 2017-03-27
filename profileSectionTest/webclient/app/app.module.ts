import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AppComponent } from './app.component';
import { Logger } from 'angular2-logger/core';
import { Md2Module } from 'md2';
import { ProfileService } from './services/profile.service';
import { SamProfileCardService } from './services/sam-profile-card.service';
import { SamProfileSectionConfigService } from './services/sam-profile-section-config.service';
import { SamarthyaWebComponentsModule } from 'samarthyaWebcomponent';
import { SamProfileSectionComponent } from 'samarthyaWebcomponent/sam-profile/sam-profile-section/sam-profile-section.component';
import { SamProfileCardComponent } from 'samarthyaWebcomponent/sam-profile/sam-profile-card/sam-profile-card.component';



@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule.forRoot(),
    Md2Module.forRoot(),
    SamarthyaWebComponentsModule
  ], exports: [
    MaterialModule
  ],
  providers: [
    Logger,
    ProfileService,
    SamProfileCardService,
    SamProfileSectionConfigService
  ],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
  ],
})
export class AppModule { }
