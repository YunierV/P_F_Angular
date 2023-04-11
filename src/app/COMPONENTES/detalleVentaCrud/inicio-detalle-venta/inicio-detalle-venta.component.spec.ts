import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioDetalleVentaComponent } from './inicio-detalle-venta.component';

describe('InicioDetalleVentaComponent', () => {
  let component: InicioDetalleVentaComponent;
  let fixture: ComponentFixture<InicioDetalleVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioDetalleVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioDetalleVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
