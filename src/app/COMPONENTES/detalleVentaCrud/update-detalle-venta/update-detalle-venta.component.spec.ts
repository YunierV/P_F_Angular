import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDetalleVentaComponent } from './update-detalle-venta.component';

describe('UpdateDetalleVentaComponent', () => {
  let component: UpdateDetalleVentaComponent;
  let fixture: ComponentFixture<UpdateDetalleVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDetalleVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDetalleVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
