import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaLibreComponent } from './reservalibre.component';

describe('ReservaLibreComponent', () => {
  let component: ReservaLibreComponent;
  let fixture: ComponentFixture<ReservaLibreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaLibreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaLibreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
