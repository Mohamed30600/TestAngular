import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Docteur2Component } from './docteur2.component';

describe('Docteur2Component', () => {
  let component: Docteur2Component;
  let fixture: ComponentFixture<Docteur2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Docteur2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Docteur2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
