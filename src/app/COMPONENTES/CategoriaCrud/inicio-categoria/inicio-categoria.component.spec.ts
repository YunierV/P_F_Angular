import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioCategoriaComponent } from './inicio-categoria.component';

describe('InicioCategoriaComponent', () => {
  let component: InicioCategoriaComponent;
  let fixture: ComponentFixture<InicioCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
