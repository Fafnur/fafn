import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';

/**
 * Environment injection token
 * @publicApi
 */
export const ENVIRONMENTS = new InjectionToken<Record<string, unknown>>('ENVIRONMENTS');

/**
 * Service for share application environments in Nx libs.
 * @publicApi
 *
 * @usageNotes
 * ### Example
 * To use, you should provide ENVIRONMENTS in your AppModule.
 *
 * ```
 * import { NgModule } from '@angular/core';
 * import { ENVIRONMENTS } from '@fafn/core';
 *
 * import { environment } from '../environments/environment';
 *
 * @NgModule({
 *   providers: [
 *     {
 *       provide: ENVIRONMENTS,
 *       useValue: environment,
 *     },
 *     ...
 *   ],
 * })
 * export class AppModule {}
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class EnvironmentService<T extends Record<string, unknown> = Record<string, unknown>> {
  /**
   * Application environments
   */
  private readonly environments: T;

  constructor(@Optional() @Inject(ENVIRONMENTS) environments: T | null) {
    if (environments === null) {
      console.warn('ENVIRONMENTS not provided. Provide ENVIRONMENTS in your app.');
      this.environments = {} as T;
    } else {
      this.environments = environments;
    }
  }

  /**
   * Return application environments
   */
  get(): T {
    return this.environments;
  }
}
