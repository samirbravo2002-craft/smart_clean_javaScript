import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosYPrecios } from './servicios-y-precios';

describe('ServiciosYPrecios', () => {
  let component: ServiciosYPrecios;
  let fixture: ComponentFixture<ServiciosYPrecios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiciosYPrecios],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiciosYPrecios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
