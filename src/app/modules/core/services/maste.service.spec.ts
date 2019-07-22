import { TestBed } from '@angular/core/testing';

import { MasteService } from './maste.service';

describe('MasteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasteService = TestBed.get(MasteService);
    expect(service).toBeTruthy();
  });
});
