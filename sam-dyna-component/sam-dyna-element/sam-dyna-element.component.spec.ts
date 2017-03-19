/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SamDynaElementComponent } from './sam-dyna-element.component';

describe('SamDynaElementComponent', () => {
  let component: SamDynaElementComponent;
  let fixture: ComponentFixture<SamDynaElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamDynaElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamDynaElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
