import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCheckInComponent } from './createcheckin.component';

describe('ReservaComponent', () => {
  let component: CreateCheckInComponent;
  let fixture: ComponentFixture<CreateCheckInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCheckInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCheckInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
