"use client";

import { SinglePerson } from "../SinglePerson";
import { MoreAndMorePeopleTypes } from "./types";
import { useResult } from "./useResult";
import styles from "./index.module.scss";
import { TableHead } from "../TableHead";

const { table, table__body } = styles;

export const MoreAndMorePeople = ({ people }: MoreAndMorePeopleTypes) => {
  const { visibleResults, lastElementRef } = useResult(people);

  const isLastVisibleElement = (index: number) => index === visibleResults.length - 1;

  return (
    <>
      <table className={table}>
        <TableHead/>
        <tbody className={table__body}>
          {visibleResults.map((person, index) => (
            <SinglePerson
              key={person.id}
              ref={isLastVisibleElement(index) ? lastElementRef : null}
              position={index + 1}
              name={person.name}
              surname={person.surname}
              age={person.age}
              gender={person.gender}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
