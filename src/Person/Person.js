import React from "react";

import "./Person.css";

const person = (props) => {
  return (
    <div className="Person">
      <input onChange={props.onchange} value={props.name} />
      <p onClick={props.clicked}>
        I&apos;m {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
