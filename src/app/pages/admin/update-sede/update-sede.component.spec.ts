import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSedeComponent } from './update-sede.component';

describe('UpdateSedeComponent', () => {
  let component: UpdateSedeComponent;
  let fixture: ComponentFixture<UpdateSedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSedeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
