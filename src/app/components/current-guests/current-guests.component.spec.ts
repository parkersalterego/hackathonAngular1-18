import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentGuestsComponent } from './current-guests.component';

describe('CurrentGuestsComponent', () => {
  let component: CurrentGuestsComponent;
  let fixture: ComponentFixture<CurrentGuestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentGuestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentGuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
