import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVideosComponent } from './new-videos.component';

describe('NewVideosComponent', () => {
  let component: NewVideosComponent;
  let fixture: ComponentFixture<NewVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
