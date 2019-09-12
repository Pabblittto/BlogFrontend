import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostModyficationPanelComponent } from './post-modyfication-panel.component';

describe('PostModyficationPanelComponent', () => {
  let component: PostModyficationPanelComponent;
  let fixture: ComponentFixture<PostModyficationPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostModyficationPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostModyficationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
