import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoEachComponent } from './video-each.component';

describe('VideoEachComponent', () => {
  let component: VideoEachComponent;
  let fixture: ComponentFixture<VideoEachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoEachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoEachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
