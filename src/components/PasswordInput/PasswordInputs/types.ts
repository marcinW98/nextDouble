export type PasswordInputsType = {
  inputsQuantity: number;
};

export type MessageStatus = "success" | "error";

type InputValues = string[];
type DisabledIndexes = number[];
type HandleChange = (index: number, value: string) => Promise<void>;
type HandleChangeVisibility = () => void;

export type UsePasswordResult = {
  inputValues: InputValues;
  disabledIndexes: DisabledIndexes;
  handleChange: HandleChange;
  isVisiblePassword: boolean;
  handleChangeVisibility: HandleChangeVisibility;
  isAllActiveInputFilled: boolean;
  status: MessageStatus | undefined;
  isBusy: boolean;
};
