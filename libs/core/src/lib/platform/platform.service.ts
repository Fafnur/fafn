import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

/**
 * Service for platform id. Simple facade for isPlatform utils.
 * @publicApi
 *
 * @usageNotes
 * ### Example
 * You can just use the service:
 *
 * ```
 * @Component({})
 * class YourComponent {
 *   constructor(private readonly platformService: PlatformService) {
 *     const isBrowser = this.platformService.isBrowser;
 *   }
 * }
 *
 * @description You can use Platform service for detect isBrowser from @angular/cdk
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class PlatformService {
  /**
   * Returns whether a platform id represents a browser platform.
   */
  readonly isBrowser: boolean;

  /**
   * Returns whether a platform id represents a server platform.
   */
  readonly isServer: boolean;

  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(@Inject(PLATFORM_ID) private readonly platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.isServer = isPlatformServer(this.platformId);
  }
}
