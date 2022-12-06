import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedactarMensajeComponent } from './redactar-mensaje.component';

describe('RedactarMensajeComponent', () => {
  let component: RedactarMensajeComponent;
  let fixture: ComponentFixture<RedactarMensajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedactarMensajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedactarMensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
