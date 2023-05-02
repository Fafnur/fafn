import { Pipe, PipeTransform } from '@angular/core';

import { GallerySlide } from '@fafn/components';

@Pipe({
  name: 'backgroundImage',
  standalone: true,
})
export class BackgroundImagePipe implements PipeTransform {
  transform(slide: GallerySlide): { backgroundImage: string } | undefined {
    if (!slide.image?.length) {
      return;
    }

    return { backgroundImage: `url(${slide.image})` };
  }
}
