import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfesoresXsedeComponent } from './view-profesores-xsede.component';

describe('ViewProfesoresXsedeComponent', () => {
  let component: ViewProfesoresXsedeComponent;
  let fixture: ComponentFixture<ViewProfesoresXsedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProfesoresXsedeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProfesoresXsedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
