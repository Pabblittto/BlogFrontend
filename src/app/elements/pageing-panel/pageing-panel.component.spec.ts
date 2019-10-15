import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageingPanelComponent } from './pageing-panel.component';

describe('PageingPanelComponent', () => {
  let component: PageingPanelComponent;
  let fixture: ComponentFixture<PageingPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageingPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
