import { RatingDataProps } from "../../types";

export const getAverageScoreSum = (arrayOfElements: RatingDataProps[]) => {
  const scoreSum = arrayOfElements.reduce(
    (accumulator, currentValue) => accumulator + currentValue.score,
    0
  );
  const numberOfVotes = arrayOfElements.length;
  return scoreSum / numberOfVotes;
};
