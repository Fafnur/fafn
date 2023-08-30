/**
 * Detect value from HTML attribute like as [disabled].
 *
 * ```
 * <component [prop]="undefined" /> => true
 * <component prop /> => true
 * <component prop="" /> => true
 * <component [prop]="true" /> => true
 * <component [prop]="false" /> => false
 * <component [prop]="null" /> => false
 * <component [prop]="expr" /> => result expr
 * ```
 *
 * @param value Property value
 */
export function coerceProperty(value: boolean | string | undefined | null): boolean {
  if (typeof value === 'undefined') {
    return true;
  } else if (typeof value === 'boolean') {
    return value;
  } else if (typeof value === 'string') {
    return value === '' ? true : value === 'true';
  } else {
    return false;
  }
}
