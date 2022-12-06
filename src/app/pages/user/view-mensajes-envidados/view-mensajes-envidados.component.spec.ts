import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMensajesEnvidadosComponent } from './view-mensajes-envidados.component';

describe('ViewMensajesEnvidadosComponent', () => {
  let component: ViewMensajesEnvidadosComponent;
  let fixture: ComponentFixture<ViewMensajesEnvidadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMensajesEnvidadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMensajesEnvidadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
