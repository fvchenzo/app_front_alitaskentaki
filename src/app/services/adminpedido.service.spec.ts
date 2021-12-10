import { TestBed } from '@angular/core/testing';

import { AdminpedidoService } from './adminpedido.service';

describe('AdminpedidoService', () => {
  let service: AdminpedidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminpedidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
