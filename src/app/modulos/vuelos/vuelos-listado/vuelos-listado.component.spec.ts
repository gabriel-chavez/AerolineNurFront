import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VuelosListadoComponent } from './vuelos-listado.component';

describe('VuelosListadoComponent', () => {
  let component: VuelosListadoComponent;
  let fixture: ComponentFixture<VuelosListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VuelosListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VuelosListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
