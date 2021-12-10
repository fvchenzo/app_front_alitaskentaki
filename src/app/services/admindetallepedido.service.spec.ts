import { TestBed } from '@angular/core/testing';

import { AdmindetallepedidoService } from './admindetallepedido.service';

describe('AdmindetallepedidoService', () => {
  let service: AdmindetallepedidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmindetallepedidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
