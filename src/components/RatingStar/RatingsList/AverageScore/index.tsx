import { ScoreStars } from "../Rating/ScoreStars";
import { AverageScoreProps } from "./types";
import { getAverageScoreSum } from "./utils";
import styles from "./rwd.module.scss";

const { wrapper, wrapper__Title, wrapperStars } = styles;

export const AverageScore = ({ averageScoreLabel, reviews }: AverageScoreProps) => {
  const roundedAverageScore = getAverageScoreSum(reviews);

  return (
    <div className={wrapper}>
      <h1 className={wrapper__Title}>
        {averageScoreLabel}: {roundedAverageScore}
      </h1>
      <div className={wrapperStars}>
        <ScoreStars score={roundedAverageScore} />
      </div>
    </div>
  );
};
