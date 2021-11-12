import { TestBed } from '@angular/core/testing';

import { PedidoclienteService } from './pedidocliente.service';

describe('PedidoclienteService', () => {
  let service: PedidoclienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidoclienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
