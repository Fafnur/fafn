import { TestBed } from '@angular/core/testing';

import { LocalStorageAsync } from './local-storage-async';
import { LocalStorageSync } from './local-storage-sync';

/**
 * TODO: Add tests
 */
describe('LocalStorageAsync', () => {
  let service: LocalStorageAsync;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [LocalStorageAsync, LocalStorageSync],
    }).compileComponents();

    service = TestBed.inject(LocalStorageAsync);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
