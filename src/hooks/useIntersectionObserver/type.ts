import { RefObject } from "react";

export type UseIntersectionObserverTypes = {
  elementsRefs: RefObject<Element>[];
  options?: { root?: Element | null; rootMargin?: number; threshold?: number };
  callback?: (entry: IntersectionObserverEntry, isIntersecting: boolean) => void;
};
