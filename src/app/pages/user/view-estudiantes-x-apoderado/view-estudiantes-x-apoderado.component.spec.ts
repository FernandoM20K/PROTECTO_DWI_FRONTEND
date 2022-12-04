import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEstudiantesXApoderadoComponent } from './view-estudiantes-x-apoderado.component';

describe('ViewEstudiantesXApoderadoComponent', () => {
  let component: ViewEstudiantesXApoderadoComponent;
  let fixture: ComponentFixture<ViewEstudiantesXApoderadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEstudiantesXApoderadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEstudiantesXApoderadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
