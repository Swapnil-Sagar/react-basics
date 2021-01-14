import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Swapnil",
      age: "28",
    },
    {
      id: 2,
      name: "Sagar",
      age: "23",
    },

    {
      id: 3,
      name: "Ocean",
      age: "18",
    },
  ];
  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));
  return <div>{personList}</div>;
}

export default NameList;
