import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfazCalculadoraComponent } from './interfaz-calculadora.component';

describe('InterfazCalculadoraComponent', () => {
  let component: InterfazCalculadoraComponent;
  let fixture: ComponentFixture<InterfazCalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfazCalculadoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfazCalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
