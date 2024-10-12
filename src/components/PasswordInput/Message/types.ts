import { MessageStatus } from "../PasswordInputs/types";

export type MessageTypes = {
  status?: MessageStatus;
  successMessage?: string;
  errorMessage?: string;
};
