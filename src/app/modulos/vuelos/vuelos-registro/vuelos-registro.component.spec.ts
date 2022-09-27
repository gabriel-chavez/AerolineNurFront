import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VuelosRegistroComponent } from './vuelos-registro.component';

describe('VuelosRegistroComponent', () => {
  let component: VuelosRegistroComponent;
  let fixture: ComponentFixture<VuelosRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VuelosRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VuelosRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
