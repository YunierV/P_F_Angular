import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioVentaComponent } from './inicio-venta.component';

describe('InicioVentaComponent', () => {
  let component: InicioVentaComponent;
  let fixture: ComponentFixture<InicioVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
