import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Docteur1Component } from './docteur1.component';

describe('Docteur1Component', () => {
  let component: Docteur1Component;
  let fixture: ComponentFixture<Docteur1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Docteur1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Docteur1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
