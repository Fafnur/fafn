import { Directive } from '@angular/core';

@Directive({
  selector: 'fafn-container[fluid],fafnContainer[fafnFluid]',
  standalone: true,
})
export class FluidDirective {}
