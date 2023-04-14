import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContainerComponent, GRID } from '@fafn/components';
import { LocalDBService } from '@fafn/core';

const TOKENS = 'tokens';

@Component({
  standalone: true,
  imports: [RouterModule, ContainerComponent, GRID],
  selector: 'fafn-root',
  template: `<router-outlet></router-outlet>
    <fafn-container>
      <fafn-row tablet="">
        <fafn-column tablet="6" web="3">1</fafn-column>
        <fafn-column tablet="6" web="3">2</fafn-column>
        <fafn-column tablet="6" web="3">3</fafn-column>
        <fafn-column tablet="6" web="3">4</fafn-column>
      </fafn-row>
    </fafn-container>`,
})
export class AppComponent implements OnInit {
  constructor(private readonly localDBService: LocalDBService<typeof TOKENS | 'books'>) {}

  ngOnInit(): void {
    void this.localDBService.put('books', 1);
  }
}
