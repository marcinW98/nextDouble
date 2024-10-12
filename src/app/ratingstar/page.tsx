import React from "react";
import { RatingList } from "@/components/RatingStar/RatingsList";
import { ratings } from "../../../data.json";


export default async function RatingStar() {
  return <RatingList averageScoreLabel={ratings.averageScoreLabel} reviews={ratings.reviews} />;
}
