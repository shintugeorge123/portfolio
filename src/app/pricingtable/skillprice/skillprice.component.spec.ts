/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SkillpriceComponent } from './skillprice.component';

describe('SkillpriceComponent', () => {
  let component: SkillpriceComponent;
  let fixture: ComponentFixture<SkillpriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillpriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
