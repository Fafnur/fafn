import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafn-headline,[fafnHeadline]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./headline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class HeadlineComponent {}
