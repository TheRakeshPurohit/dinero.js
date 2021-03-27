import {
  unsafeGreaterThan as coreUnsafeGreaterThan,
  safeGreaterThan as coreSafeGreaterThan,
} from '@dinero.js/core';
import {
  add,
  compare,
  multiply,
  power,
  subtract,
  halfEven,
  zero,
} from '@dinero.js/calculator/number';
import { createFunction } from '../helpers';

/**
 * Unsafely check whether the value of a pure Dinero object is greater than another.
 *
 * @param dineroObject The pure Dinero object to compare.
 * @param comparator The pure Dinero object to compare to.
 *
 * @returns Whether the pure Dinero to compare is greater than the other.
 */
export const unsafeGreaterThan = createFunction(coreUnsafeGreaterThan, {
  compare,
});

/**
 * Check whether the value of a pure Dinero object is greater than another.
 *
 * @param dineroObject The pure Dinero object to compare.
 * @param comparator The pure Dinero object to compare to.
 *
 * @returns Whether the pure Dinero to compare is greater than the other.
 */
export const safeGreaterThan = createFunction(coreSafeGreaterThan, {
  add,
  compare,
  multiply,
  power,
  subtract,
  round: halfEven,
  zero,
});