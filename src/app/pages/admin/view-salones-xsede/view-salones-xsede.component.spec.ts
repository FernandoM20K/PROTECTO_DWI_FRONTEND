import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSalonesXsedeComponent } from './view-salones-xsede.component';

describe('ViewSalonesXsedeComponent', () => {
  let component: ViewSalonesXsedeComponent;
  let fixture: ComponentFixture<ViewSalonesXsedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSalonesXsedeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSalonesXsedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
