import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationfComponent } from './registrationf.component';

describe('RegistrationfComponent', () => {
  let component: RegistrationfComponent;
  let fixture: ComponentFixture<RegistrationfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
