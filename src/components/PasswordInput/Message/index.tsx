import { MessageTypes } from "./types";

import styles from "./index.module.scss";

const { text } = styles;

const mockMessageData = {
  successMessage: "Correct password",
  errorMessage: "Incorrect password",
};

export const Message = ({
  status,
  successMessage = mockMessageData.successMessage,
  errorMessage = mockMessageData.errorMessage,
}: MessageTypes) => {
  if (status === "success") return <h1 className={text}>{successMessage}</h1>;

  if (status === "error") return <h1 className={text}>{errorMessage}</h1>;

  return null;
};
