import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafn-container,[fafnContainer]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ContainerComponent {}
