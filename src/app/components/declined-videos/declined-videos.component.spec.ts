import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclinedVideosComponent } from './declined-videos.component';

describe('DeclinedVideosComponent', () => {
  let component: DeclinedVideosComponent;
  let fixture: ComponentFixture<DeclinedVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclinedVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclinedVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
