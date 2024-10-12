import React from "react";
import { AverageScore } from "./AverageScore";
import { Rating } from "./Rating";
import styles from "./index.module.scss";
import { RatingListProps } from "./types";

const { list } = styles;

export const RatingList = ({ averageScoreLabel, reviews }: RatingListProps) => {
  return (
    <div>
      <AverageScore averageScoreLabel={averageScoreLabel} reviews={reviews} />
      {reviews.length > 0 && (
        <ul className={list}>
          {reviews.map((reviews) => (
            <Rating key={reviews.name} rating={reviews} />
          ))}
        </ul>
      )}
    </div>
  );
};
