import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalonComponent } from './add-salon.component';

describe('AddSalonComponent', () => {
  let component: AddSalonComponent;
  let fixture: ComponentFixture<AddSalonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSalonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
