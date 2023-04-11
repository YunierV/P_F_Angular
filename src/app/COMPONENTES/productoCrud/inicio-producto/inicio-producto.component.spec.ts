import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioProductoComponent } from './inicio-producto.component';

describe('InicioProductoComponent', () => {
  let component: InicioProductoComponent;
  let fixture: ComponentFixture<InicioProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
