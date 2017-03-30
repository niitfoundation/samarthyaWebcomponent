/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SamDynamicFormElementComponent } from './sam-dynamic-form-element.component';

describe('SamDynamicElementComponent', () => {
  let component: SamDynamicFormElementComponent;
  let fixture: ComponentFixture<SamDynamicFormElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SamDynamicFormElementComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamDynamicFormElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
