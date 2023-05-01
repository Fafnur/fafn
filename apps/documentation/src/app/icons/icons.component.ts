import { Component } from '@angular/core';

import { IconButtonComponent } from '@fafn/components/buttons';
import { ContainerComponent } from '@fafn/components/container';
import { IconComponent, IconService } from '@fafn/components/icon';

/* eslint-disable max-len */
export const vkontakteIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974h-3.255c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.376 2.708z" /></svg>`;
export const gosuslugiIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M15.59,25.5a4.56,4.56,0,0,1-1.86-.36c-.06,0-1.4-.65-2.9-1.56s-2.69-1.81-2.74-1.85A4.66,4.66,0,0,1,7,20.43l.86-.51a3.69,3.69,0,0,0,.86,1s1.19.91,2.65,1.79,2.79,1.5,2.81,1.51a4,4,0,0,0,2.87,0s1.35-.63,2.81-1.51,2.64-1.78,2.65-1.79a4.42,4.42,0,0,0,1.45-2.64s.16-1.54.16-3.3-.15-3.29-.16-3.3a4.43,4.43,0,0,0-1.45-2.64s-1.19-.91-2.65-1.79S17,5.77,17,5.77a4,4,0,0,0-2.87,0s-1.35.63-2.8,1.51S8.71,9.05,8.7,9.06a3.71,3.71,0,0,0-.86,1L7,9.57a4.64,4.64,0,0,1,1.11-1.3s1.23-.94,2.74-1.85,2.85-1.53,2.9-1.56a5,5,0,0,1,3.71,0c.06,0,1.39.65,2.9,1.56S23,8.23,23.09,8.27a5.41,5.41,0,0,1,1.84,3.33c0,.06.16,1.59.16,3.4s-.15,3.34-.16,3.4a5.41,5.41,0,0,1-1.84,3.33s-1.23.94-2.74,1.85-2.85,1.53-2.9,1.56A4.56,4.56,0,0,1,15.59,25.5Z" /><polygon points="4 12 8 12 8 13 5 13 5 18 4 18 4 12" /><path d="M12,13a2,2,0,1,1-2,2,2,2,0,0,1,2-2m0-1a3,3,0,1,0,3,3,3,3,0,0,0-3-3Z" /><path d="M19,18a3,3,0,1,1,1.82-5.39l-.61.79A2,2,0,0,0,19,13a2,2,0,1,0,1.29,3.53l.64.77A3,3,0,0,1,19,18Z" /></svg>`;
/* eslint-enable max-len */

@Component({
  selector: 'fafn-page-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
  standalone: true,
  imports: [ContainerComponent, IconComponent, IconButtonComponent],
})
export class IconsComponent {
  constructor(private readonly iconService: IconService) {
    this.iconService.add('vkontakte', vkontakteIcon);
    this.iconService.add('gosuslugi', gosuslugiIcon);
  }
}
