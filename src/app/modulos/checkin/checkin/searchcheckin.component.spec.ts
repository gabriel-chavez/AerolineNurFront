import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCheckInComponent } from './searchcheckin.component';

describe('ReservaComponent', () => {
  let component: SearchCheckInComponent;
  let fixture: ComponentFixture<SearchCheckInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCheckInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCheckInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
