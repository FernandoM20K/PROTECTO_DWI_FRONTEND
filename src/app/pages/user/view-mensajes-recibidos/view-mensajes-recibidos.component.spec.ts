import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMensajesRecibidosComponent } from './view-mensajes-recibidos.component';

describe('ViewMensajesRecibidosComponent', () => {
  let component: ViewMensajesRecibidosComponent;
  let fixture: ComponentFixture<ViewMensajesRecibidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMensajesRecibidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMensajesRecibidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
