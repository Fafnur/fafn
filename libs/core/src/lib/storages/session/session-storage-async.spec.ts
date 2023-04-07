import { TestBed } from '@angular/core/testing';

import { SessionStorageAsync } from './session-storage-async';
import { SessionStorageSync } from './session-storage-sync';

/**
 * TODO: Add tests
 */
describe('SessionStorageAsync', () => {
  let service: SessionStorageAsync;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [SessionStorageAsync, SessionStorageSync],
    }).compileComponents();

    service = TestBed.inject(SessionStorageAsync);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
