export const generateDisabledIndexes = (inputValues: string[], passwordLength: number) => {
  const indexes = Array.from(inputValues.keys());
  const randomSortedIndexes = indexes.sort(() => Math.random() - 0.5);
  const quantityDisabledIndexes = Math.max(2, Math.floor(passwordLength / 2));
  return randomSortedIndexes.slice(0, passwordLength - quantityDisabledIndexes);
};
