import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioFacturaComponent } from './inicio-factura.component';

describe('InicioFacturaComponent', () => {
  let component: InicioFacturaComponent;
  let fixture: ComponentFixture<InicioFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioFacturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
