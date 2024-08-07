import { bench, describe } from 'vitest';
import { flattenDepth as flattenDepthLodash } from 'lodash-es';
import { flatten } from '.';

const createNestedArray = (values: any[]) => {
  if (values.length === 0) {
    return [];
  }
  const [first, ...rest] = values;
  return [first, createNestedArray(rest)];
};

describe('flatten', () => {
  const arr = createNestedArray(
    Array.from({ length: 30 }, (_, index) => index)
  );

  bench('modern-kit/flatten', () => {
    flatten(arr, 30);
  });

  bench('lodash/flattenDepth', () => {
    flattenDepthLodash(arr, 30);
  });

  bench('js built-in/flat', () => {
    arr.flat(30);
  });
});
