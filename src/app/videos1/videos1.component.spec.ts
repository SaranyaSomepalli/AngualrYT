import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Videos1Component } from './videos1.component';

describe('Videos1Component', () => {
  let component: Videos1Component;
  let fixture: ComponentFixture<Videos1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Videos1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Videos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
