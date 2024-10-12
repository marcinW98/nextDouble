import { useEffect, useState, useRef } from "react";
import { UseIntersectionObserverTypes } from "./type";

export const useIntersectionObserver = ({
  elementsRefs,
  options = { root: null, rootMargin: 0, threshold: 0 },
  callback
}: UseIntersectionObserverTypes) => {
  const [isVisible, setIsVisible] = useState<boolean[]>(new Array(elementsRefs.length).fill(false));
  const [isJsEnabled, setJsEnabled] = useState(false);

  const intersectionOptions = {
    root: options.root,
    rootMargin: `${options.rootMargin}px`,
    threshold: options.threshold,
  };

  useEffect(() => {
    setJsEnabled(true);
  }, []);

  useEffect(() => {
    if (!isJsEnabled) return;

    const observer = new IntersectionObserver((entries) => {
      setIsVisible((prevIsVisible) => {
        const newIsVisible = [...prevIsVisible];
        entries.forEach((entry) => {
          const index = elementsRefs.findIndex((ref) => ref.current === entry.target);
          if (index !== -1) {
            newIsVisible[index] = entry.isIntersecting;
            if(callback){
              callback(entry, newIsVisible[index])
            }
          }
        });
        return newIsVisible;
      });
    }, intersectionOptions);

    elementsRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      elementsRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [isJsEnabled]);

  return isVisible;
};
