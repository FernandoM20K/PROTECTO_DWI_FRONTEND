import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNotasXEstudianteComponent } from './view-notas-x-estudiante.component';

describe('ViewNotasXEstudianteComponent', () => {
  let component: ViewNotasXEstudianteComponent;
  let fixture: ComponentFixture<ViewNotasXEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNotasXEstudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewNotasXEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
