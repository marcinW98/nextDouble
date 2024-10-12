import { ScoreStarsProps } from "./types";
import styles from "./index.module.scss";

export const ScoreStars = ({ score }: ScoreStarsProps) => {
  const ratingInPercentage = `${(score / 5) * 100}%`;
  const stars = {
    "--percentRating": ratingInPercentage,
  } as React.CSSProperties;

  return (
    <div className={styles.Stars} style={stars}>
      ★★★★★
    </div>
  );
};
