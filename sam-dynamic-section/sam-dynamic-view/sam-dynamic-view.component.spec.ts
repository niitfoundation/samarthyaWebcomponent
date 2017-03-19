/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SamDynamicViewComponent } from './sam-dynamic-view.component';

describe('SamDynamicViewComponent', () => {
  let component: SamDynamicViewComponent;
  let fixture: ComponentFixture<SamDynamicViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamDynamicViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamDynamicViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
