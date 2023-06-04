import { DOCUMENT, NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { tap } from 'rxjs';

import { FafnAnchor } from '@fafn/components/buttons';
import { FafnSwitch } from '@fafn/components/switch';
import { LocalStorageSync } from '@fafn/core';

@Component({
  selector: 'fafn-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FafnAnchor, NgForOf, FafnSwitch, ReactiveFormsModule],
})
export class HeaderComponent implements OnInit {
  readonly control = new FormControl<boolean>(false, { nonNullable: true });
  isDark = false;

  readonly links = [
    {
      route: '/buttons',
      label: 'Buttons',
    },
    {
      route: '/dialogs',
      label: 'Dialogs',
    },
    {
      route: '/icons',
      label: 'Icons',
    },
    {
      route: '/dividers',
      label: 'Dividers',
    },
    {
      route: '/cards',
      label: 'Cards',
    },
    {
      route: '/switchs',
      label: 'Switchs',
    },
  ];

  constructor(
    private readonly localStorageSync: LocalStorageSync<{ themePreference: boolean }>,
    @Inject(DOCUMENT) private readonly document: Document
  ) {
    this.control.valueChanges
      .pipe(
        tap((isDark) => {
          this.isDark = isDark;
          this.localStorageSync.setItem('themePreference', isDark);
          this.document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        }),
        takeUntilDestroyed()
      )
      .subscribe();
  }

  ngOnInit(): void {
    const isDark =
      this.localStorageSync.getItem('themePreference') ??
      this.document.defaultView?.matchMedia('(prefers-color-scheme: dark)').matches ??
      false;

    this.control.setValue(isDark);
  }

  get label(): string {
    return this.isDark ? 'Dark' : 'Light';
  }
}
