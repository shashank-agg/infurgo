import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuiconComponent } from './menuicon.component';

describe('MenuiconComponent', () => {
  let component: MenuiconComponent;
  let fixture: ComponentFixture<MenuiconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuiconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
