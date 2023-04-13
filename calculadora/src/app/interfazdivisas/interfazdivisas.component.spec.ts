import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfazdivisasComponent } from './interfazdivisas.component';

describe('InterfazdivisasComponent', () => {
  let component: InterfazdivisasComponent;
  let fixture: ComponentFixture<InterfazdivisasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfazdivisasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfazdivisasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
