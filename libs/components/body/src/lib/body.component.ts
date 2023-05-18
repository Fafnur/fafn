import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafn-body,[fafnBody]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class BodyComponent {}
