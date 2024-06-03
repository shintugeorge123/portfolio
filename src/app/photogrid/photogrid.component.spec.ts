/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PhotogridComponent } from './photogrid.component';

describe('PhotogridComponent', () => {
  let component: PhotogridComponent;
  let fixture: ComponentFixture<PhotogridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotogridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotogridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
