"use client";

import { Input } from "../Input";
import { Message } from "../Message";
import styles from "./index.module.scss";
import { usePassword } from "./usePassword";

const { wrapper, wrapper__inputs, wrapper__checkbox } = styles;

export const PasswordInputs = () => {
  const {
    inputValues,
    disabledIndexes,
    handleChange,
    isVisiblePassword,
    handleChangeVisibility,
    isAllActiveInputFilled,
    status,
  } = usePassword();

  const inputType = isVisiblePassword ? "text" : "password";
  const buttonVisibilityLabel = isVisiblePassword ? "Hide" : "Show";

  return (
    <>
      <div className={wrapper}>
        <div className={wrapper__inputs}>
          {inputValues.map((_, index) => (
            <Input
              type={inputType}
              index={index}
              isDisabled={disabledIndexes.includes(index)}
              onChange={handleChange}
              key={index}
            />
          ))}
        </div>
        <button className={wrapper__checkbox} onClick={handleChangeVisibility}>
          {buttonVisibilityLabel}
        </button>

        {isAllActiveInputFilled && <Message status={status} />}
      </div>
    </>
  );
};
