"use client";

import { useRef } from "react";
import { Box } from "@/components/IntersectionObserver/Box";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

export default function IntersectionObserver() {
  const firstRef = useRef<HTMLDivElement | null>(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const fourthRef = useRef(null);

  const refs = [firstRef, secondRef, thirdRef, fourthRef]
  const isVisible = useIntersectionObserver({
  elementsRefs: refs,
  callback: (entry, isIntersecting) => {
    if (isIntersecting) {
      console.log(`${entry.target.id} jest widoczny!`);  
    } else {
      console.log(`${entry.target.id} zniknął!`);   // zwrocic uwage na tablice dependencji bo caly czas ywkonuje sie console.log
    }
  },
});
  return (
    <div>
      <Box ref={firstRef} isVisible={isVisible[0]} />
      <Box ref={secondRef} isVisible={isVisible[1]} />
      <Box />
      <Box ref={fourthRef} isVisible={isVisible[3]} />
    </div>
  );
}
