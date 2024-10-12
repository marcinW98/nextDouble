import { v4 as uuidv4 } from "uuid";

import { infiniteHumanList } from "../../../data.json";
const { names, surnames, ages, genders } = infiniteHumanList;

export const getRandomElement = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

export const generateRandomHumans = (quantity: number) => {
  return Array.from({ length: quantity }, () => ({
    id: uuidv4(),
    name: getRandomElement(names),
    surname: getRandomElement(surnames),
    age: getRandomElement(ages),
    gender: getRandomElement(genders),
  }));
};
