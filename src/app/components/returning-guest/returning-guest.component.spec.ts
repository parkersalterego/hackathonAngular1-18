import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturningGuestComponent } from './returning-guest.component';

describe('ReturningGuestComponent', () => {
  let component: ReturningGuestComponent;
  let fixture: ComponentFixture<ReturningGuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturningGuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturningGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
