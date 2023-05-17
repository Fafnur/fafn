import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafn-image,[fafnImage]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ImageComponent {}
