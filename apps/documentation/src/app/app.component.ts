import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LocalDBService } from '@fafn/core';

const TOKENS = 'tokens';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'fafn-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  constructor(private readonly localDBService: LocalDBService<typeof TOKENS | 'books'>) {}

  ngOnInit(): void {
    void this.localDBService.put('books', 1);
  }
}
