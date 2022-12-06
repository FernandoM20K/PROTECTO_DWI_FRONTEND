import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEstudiantesXsedeComponent } from './view-estudiantes-xsede.component';

describe('ViewEstudiantesXsedeComponent', () => {
  let component: ViewEstudiantesXsedeComponent;
  let fixture: ComponentFixture<ViewEstudiantesXsedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEstudiantesXsedeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEstudiantesXsedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
