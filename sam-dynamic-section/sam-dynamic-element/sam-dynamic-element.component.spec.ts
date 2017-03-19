/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SamDynamicElementComponent } from './sam-dynamic-element.component';

describe('SamDynamicElementComponent', () => {
  let component: SamDynamicElementComponent;
  let fixture: ComponentFixture<SamDynamicElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamDynamicElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamDynamicElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
