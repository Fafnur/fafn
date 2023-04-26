export interface CanSize {
  size: ThemeSize;
}

export interface CanSizeShort {
  size: ThemeSizeShort;
}

/** Possible color palette values. */
export type ThemeSize = 'xsmall' | 'small' | 'default' | 'medium' | 'large' | 'xlarge' | undefined;
export type ThemeSizeShort = 'small' | 'default' | 'large' | undefined;
