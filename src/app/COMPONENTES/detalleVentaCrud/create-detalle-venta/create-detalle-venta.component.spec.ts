import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDetalleVentaComponent } from './create-detalle-venta.component';

describe('CreateDetalleVentaComponent', () => {
  let component: CreateDetalleVentaComponent;
  let fixture: ComponentFixture<CreateDetalleVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDetalleVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDetalleVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
