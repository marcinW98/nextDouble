import { ScoreStars } from "./ScoreStars";
import styles from "./Rating.module.scss";
import { RatingProps } from "./types";
import React from "react";

export const Rating = ({ rating }: RatingProps) => {
  const { name, score, content } = rating;

  return (
    <div className={styles.rating}>
      <h2>{name}</h2>
      <ScoreStars score={score} />
      <p className={styles.shorterText}>{content}</p>
    </div>
  );
};
