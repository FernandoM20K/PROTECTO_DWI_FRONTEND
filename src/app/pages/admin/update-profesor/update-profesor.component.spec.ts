import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfesorComponent } from './update-profesor.component';

describe('UpdateProfesorComponent', () => {
  let component: UpdateProfesorComponent;
  let fixture: ComponentFixture<UpdateProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProfesorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
