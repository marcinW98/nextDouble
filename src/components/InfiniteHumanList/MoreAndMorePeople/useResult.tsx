import { useState, useEffect, useRef } from "react";
import { SinglePersonTypes } from "../SinglePerson/types";
import { generateRandomHumans } from "../utils";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export const useResult = (people: SinglePersonTypes[]) => {
  const [humansToLoad, setHumansToLoad] = useState<SinglePersonTypes[]>([]);
  const [visibleResults, setVisibleResults] = useState<SinglePersonTypes[]>([]);
  const [resultsQuantity, setResultsQuantity] = useState(10);
  const lastElementRef = useRef(null);

  useEffect(() => {
    setHumansToLoad(people);
  }, [people]);

  useEffect(() => {
    setVisibleResults(humansToLoad.slice(0, resultsQuantity));
  }, [resultsQuantity, humansToLoad]);

  const isLastElementVisible = useIntersectionObserver({ elementsRefs: [lastElementRef], options:{rootMargin: 500} })[0];

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isLastElementVisible) {
      timer = setTimeout(() => {
        const resultsIsEqualHumansToLoad = resultsQuantity === humansToLoad.length;
        if (resultsIsEqualHumansToLoad) {
          const nextPeople = generateRandomHumans(10);
          setHumansToLoad((prevHumans) => [...prevHumans, ...nextPeople]);
        }
        setResultsQuantity((prevValue) => prevValue + 10);
      }, 100);
    }

    return () => clearTimeout(timer);
  }, [isLastElementVisible, resultsQuantity, humansToLoad.length]);

  return { visibleResults, lastElementRef };
};
