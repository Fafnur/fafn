import { PlatformService } from './platform.service';

/**
 * @see https://github.com/angular/angular/blob/master/packages/common/src/platform_id.ts
 */
describe('PlatformService', () => {
  const PLATFORM_BROWSER_ID = 'browser';
  const PLATFORM_SERVER_ID = 'server';

  it('should be browser', () => {
    const service = new PlatformService(PLATFORM_BROWSER_ID);

    expect(service.isBrowser).toBeTruthy();
  });

  it('should be server', () => {
    const service = new PlatformService(PLATFORM_SERVER_ID);

    expect(service.isServer).toBeTruthy();
  });
});
