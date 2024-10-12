import { filledFieldsType } from "@/app/api/taskPasswordInputLogin/types";
import { users } from "../../../data.json"

export const authenticateUser = (username: string, filledFields: filledFieldsType) => {
    const user = users.find((user) => user.username === username);
    if (!user)
        return false;
    const splittedPassword = user.password.split("");
    return filledFields.every((field) => splittedPassword[field.index] === field.value);
};