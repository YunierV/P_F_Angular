import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoInicioComponent } from './cargo-inicio.component';

describe('CargoInicioComponent', () => {
  let component: CargoInicioComponent;
  let fixture: ComponentFixture<CargoInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargoInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargoInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
