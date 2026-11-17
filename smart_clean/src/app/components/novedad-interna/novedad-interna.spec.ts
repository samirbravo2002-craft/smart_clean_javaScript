import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovedadInterna } from './novedad-interna';

describe('NovedadInterna', () => {
  let component: NovedadInterna;
  let fixture: ComponentFixture<NovedadInterna>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NovedadInterna],
    }).compileComponents();

    fixture = TestBed.createComponent(NovedadInterna);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
