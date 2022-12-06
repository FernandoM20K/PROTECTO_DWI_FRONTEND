import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMensajeComponent } from './view-mensaje.component';

describe('ViewMensajeComponent', () => {
  let component: ViewMensajeComponent;
  let fixture: ComponentFixture<ViewMensajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMensajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
