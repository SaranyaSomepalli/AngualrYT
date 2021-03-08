import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginfComponent } from './loginf.component';

describe('LoginfComponent', () => {
  let component: LoginfComponent;
  let fixture: ComponentFixture<LoginfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
