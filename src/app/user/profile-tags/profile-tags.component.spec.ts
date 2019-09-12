import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTagsComponent } from './profile-tags.component';

describe('ProfileTagsComponent', () => {
  let component: ProfileTagsComponent;
  let fixture: ComponentFixture<ProfileTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
