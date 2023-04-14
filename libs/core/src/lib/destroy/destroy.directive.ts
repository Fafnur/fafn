import { Directive, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Directive for unsubscribe in components.
 * @publicApi
 *
 * @usageNotes
 * Add directive on hostDirectives on your component.
 *
 * ```
 * import { inject } from '@angular/core';
 *
 * import { DestroyDirective } from '@fafn/core';
 *
 * @Component({
 *   hostDirectives: [DestroyDirective]
 * })
 * class YourComponent {
 *   private readonly destroy$ = inject(DestroyDirective).destroy$;
 * }
 * ```
 */
@Directive({
  selector: '[fafnDestroy]',
  standalone: true,
})
export class DestroyDirective implements OnDestroy {
  private readonly subject$ = new Subject<void>();

  readonly destroy$ = this.subject$.asObservable();

  ngOnDestroy(): void {
    this.subject$.next();
    this.subject$.complete();
  }
}
