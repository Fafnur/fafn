import { DOCUMENT, NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, Inject, OnInit } from '@angular/core';
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
  control!: FormControl<boolean>;
  isDark!: boolean;

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
    {
      route: '/inputs',
      label: 'Inputs',
    },
  ];

  constructor(
    private readonly localStorageSync: LocalStorageSync<{ themePreference: boolean }>,
    private readonly destroyRef: DestroyRef,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {}

  ngOnInit(): void {
    const prefers = this.document.defaultView?.matchMedia('(prefers-color-scheme: dark)').matches;
    this.isDark = this.localStorageSync.getItem('themePreference') ?? prefers ?? false;
    this.document.documentElement.setAttribute('data-theme', this.isDark ? 'dark' : 'light');
    this.control = new FormControl<boolean>(this.isDark, { nonNullable: true });

    this.control.valueChanges
      .pipe(
        tap((dark) => {
          this.isDark = dark;
          this.localStorageSync.setItem('themePreference', dark);
          this.document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }

  get label(): string {
    return this.isDark ? 'Dark' : 'Light';
  }
}
