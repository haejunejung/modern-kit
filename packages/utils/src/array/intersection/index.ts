import { intersectionWithDuplicates, uniq } from '..';

export const intersection = <T, U>(
  firstArr: T[] | readonly T[],
  secondArr: T[] | readonly T[],
  iteratee?: (item: T) => U
) => {
  const intersection = intersectionWithDuplicates(
    firstArr,
    secondArr,
    iteratee
  );

  return uniq(intersection, iteratee);
};
