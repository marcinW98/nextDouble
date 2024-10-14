import { forwardRef } from "react";
import { SinglePersonTypes } from "./types";

export const SinglePerson = forwardRef<HTMLTableRowElement, SinglePersonTypes>(
  ({ position, name, surname, age, gender }, ref) => (
    <tr ref={ref}>
      <td>{position}</td>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{age}</td>
      <td>{gender}</td>
    </tr>
  )
);

SinglePerson.displayName = "SinglePerson";
