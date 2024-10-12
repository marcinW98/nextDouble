import styles from "./index.module.scss";
import { BoxType } from "./types";
import React from "react";
// cx

const { box, boxVisible } = styles;

export const Box = React.forwardRef<HTMLDivElement, BoxType>(({ isVisible = false }, ref) => {
  const isBoxVisibleClass = isVisible ? boxVisible : "";

  return (
    <div ref={ref} className={`${box} ${isBoxVisibleClass}`}>
      {isVisible ? "Element is visible" : "Element is not visible"}
    </div>
  );
});

// export const MyBox = ({ isVisible = false }) => {
//   const isBoxVisibleClass = isVisible ? boxVisible : "";

//   return (
//     <div className={`${box} ${isBoxVisibleClass}`}>{isVisible ? "Element is visible" : "Element is not visible"}</div>
//   );
// };
