import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfesorCursoComponent } from './add-profesor-curso.component';

describe('AddProfesorCursoComponent', () => {
  let component: AddProfesorCursoComponent;
  let fixture: ComponentFixture<AddProfesorCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProfesorCursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProfesorCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
