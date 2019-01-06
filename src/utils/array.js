export const getRandomElements = (sourceArray, neededElements) => {
  const copyArray = sourceArray.slice();
  const shuffled = copyArray.sort(() => 0.5 - Math.random());

  return shuffled.slice(0, neededElements);
};
