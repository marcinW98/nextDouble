export type InputTypes = {
  index: number;
  isDisabled: boolean;
  onChange: (index: number, value: string) => void;
  type: "password" | "text";
};
