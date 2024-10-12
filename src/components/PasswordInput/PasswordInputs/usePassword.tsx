import { useCallback, useEffect, useState } from "react";
import { generateDisabledIndexes } from "./utils";
import { MessageStatus, UsePasswordResult } from "./types";

export const usePassword = (): UsePasswordResult => {
  const [isBusy, setIsBusy] = useState(false);
  const [passwordLength, setPasswordLength] = useState<number>(0);
  const [inputValues, setInputValues] = useState<string[]>(Array(passwordLength).fill(""));
  const [disabledIndexes, setDisabledIndexes] = useState<number[]>([]);
  const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false);
  const [isAllActiveInputFilled, setIsAllActiveInputFilled] = useState<boolean>(false);

  const [status, setStatus] = useState<MessageStatus | undefined>(undefined);

  const fetchPasswordLength = async () => {
    setIsBusy(true);
    try {
      const response = await fetch("/api/fetchPasswordLength", { cache: "force-cache" });
      if (!response.ok) {
        throw new Error("Failed to fetch password length");
      }
      const data = await response.json();
      setPasswordLength(data.passwordLength);
    } catch (error) {
      console.log(error);
    } finally {
      setIsBusy(false);
    }
  };

  useEffect(() => {
    fetchPasswordLength();
  }, []);

  useEffect(() => {
    const newInputValues = Array(passwordLength).fill("");
    setInputValues(newInputValues);

    const newDisabledIndexes = generateDisabledIndexes(newInputValues, passwordLength);

    setDisabledIndexes(newDisabledIndexes);
  }, [passwordLength]);

  const handleChange = useCallback(
    async (index: number, value: string) => {
      const newValues = [...inputValues];

      newValues.splice(index, 1, value);

      setInputValues(newValues);

      const filledFields = newValues
        .map((value: string, index: number) => ({ index, value }))
        .filter((item) => item.value !== "");
      console.log(newValues);

      const allFilled =
        newValues.filter((value, index) => value.length === 0 && disabledIndexes.indexOf(index) === -1).length === 0;
      setIsAllActiveInputFilled(allFilled);

      if (allFilled) {
        // setIsBusy(true);
        try {
          const response = await fetch("/api/taskPasswordInputLogin", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: "user",
              password: newValues,
              filledFields,
            }),
          });

          const isCorrectResponse = response.status === 200;

          if (isCorrectResponse) {
            setStatus("success");
            return;
          }

          setStatus("error");
        } catch (error) {
          console.log(error);
          setStatus("error");
        } finally {
          setIsBusy(false);
        }
      }
    },
    [inputValues, disabledIndexes]
  );

  const handleChangeVisibility = useCallback(() => {
    setIsVisiblePassword(!isVisiblePassword);
  }, [isVisiblePassword]);

  return {
    inputValues,
    disabledIndexes,
    handleChange,
    isVisiblePassword,
    handleChangeVisibility,
    isAllActiveInputFilled,
    status,
    isBusy,
  };
};
