import { useState, useEffect } from "react";
import { generateRandomHumans } from "./utils";
import { SinglePersonTypes } from "../../components/InfiniteHumanList/SinglePerson/types";

export const usePerson = () => {
  const [people, setPeople] = useState<SinglePersonTypes[]>([]);

  useEffect(() => {
    const randomPeoples = generateRandomHumans(100);
    setPeople(randomPeoples);
  }, []);
  return { people };
};
