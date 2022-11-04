import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSedesComponent } from './view-sedes.component';

describe('ViewSedesComponent', () => {
  let component: ViewSedesComponent;
  let fixture: ComponentFixture<ViewSedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSedesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
