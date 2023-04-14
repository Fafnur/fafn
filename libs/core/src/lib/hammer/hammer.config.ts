import { Injectable } from '@angular/core';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';

/**
 * Hammer config for application
 * @publicApi
 */
@Injectable()
export class HammerConfig extends HammerGestureConfig {
  override overrides = {
    swipe: { velocity: 0.4, threshold: 20 },
    pinch: { enable: false },
    rotate: { enable: false },
  };
}

export const HAMMER_GESTURE_CONFIG_PROVIDER = {
  provide: HAMMER_GESTURE_CONFIG,
  useClass: HammerConfig,
};
