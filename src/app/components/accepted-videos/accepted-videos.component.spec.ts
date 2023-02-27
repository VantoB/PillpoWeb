import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedVideosComponent } from './accepted-videos.component';

describe('AcceptedVideosComponent', () => {
  let component: AcceptedVideosComponent;
  let fixture: ComponentFixture<AcceptedVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
