import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCursosXEstudianteComponent } from './view-cursos-x-estudiante.component';

describe('ViewCursosXEstudianteComponent', () => {
  let component: ViewCursosXEstudianteComponent;
  let fixture: ComponentFixture<ViewCursosXEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCursosXEstudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCursosXEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
