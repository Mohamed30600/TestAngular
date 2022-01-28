import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocOnlineComponent } from './doc-online.component';

describe('DocOnlineComponent', () => {
  let component: DocOnlineComponent;
  let fixture: ComponentFixture<DocOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocOnlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
