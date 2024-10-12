"use client";

import styles from "./index.module.scss";
import { InputTypes } from "./types";

const { input, input__field, input__number } = styles;

export const Input = ({ index, isDisabled, onChange, type }: InputTypes) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(index, event.target.value);
  };

  return (
    <div className={input}>
      <input type={type} className={input__field} disabled={isDisabled} maxLength={1} onChange={handleChange}></input>
      <p className={input__number}>{index + 1}</p>
    </div>
  );
};
