import { TestBed } from '@angular/core/testing';

import { LocalStorageNative } from './local-storage-native';
import { LocalStorageSync } from './local-storage-sync';

/**
 * TODO: Add tests
 */
describe('LocalStorageSync', () => {
  let service: LocalStorageSync;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [LocalStorageSync, LocalStorageNative],
    }).compileComponents();

    service = TestBed.inject(LocalStorageSync);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
