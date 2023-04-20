export interface CanColor {
  color: ThemePalette;
  // defaultColor: ThemePalette | undefined;
}

/** Possible color palette values. */
export type ThemePalette = 'primary' | 'accent' | 'warn' | undefined;
