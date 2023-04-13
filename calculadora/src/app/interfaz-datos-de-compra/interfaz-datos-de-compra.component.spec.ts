import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfazDatosDeCompraComponent } from './interfaz-datos-de-compra.component';

describe('InterfazDatosDeCompraComponent', () => {
  let component: InterfazDatosDeCompraComponent;
  let fixture: ComponentFixture<InterfazDatosDeCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfazDatosDeCompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfazDatosDeCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
