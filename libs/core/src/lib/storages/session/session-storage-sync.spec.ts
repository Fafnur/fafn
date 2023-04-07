import { TestBed } from '@angular/core/testing';

import { SessionStorageNative } from './session-storage-native';
import { SessionStorageSync } from './session-storage-sync';

/**
 * TODO: Add tests
 */
describe('SessionStorageSync', () => {
  let service: SessionStorageSync;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [SessionStorageSync, SessionStorageNative],
    }).compileComponents();

    service = TestBed.inject(SessionStorageSync);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
