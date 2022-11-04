import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfesoresComponent } from './view-profesores.component';

describe('ViewProfesoresComponent', () => {
  let component: ViewProfesoresComponent;
  let fixture: ComponentFixture<ViewProfesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProfesoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
