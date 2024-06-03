/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PricingtableComponent } from './pricingtable.component';

describe('PricingtableComponent', () => {
  let component: PricingtableComponent;
  let fixture: ComponentFixture<PricingtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
