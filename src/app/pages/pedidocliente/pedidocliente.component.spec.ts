import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoclienteComponent } from './pedidocliente.component';

describe('PedidoclienteComponent', () => {
  let component: PedidoclienteComponent;
  let fixture: ComponentFixture<PedidoclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoclienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
