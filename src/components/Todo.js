import React, { useState } from "react";

// the props are used into the App.js
function Todo(props) {
  const [bool, setBool] = useState(false);
  /* This works too */
  //   function handleClick() {
  //     bool ? setBool(false) : setBool(true);
  //   }
  function handleClick() {
    setBool((prevValue) => !prevValue);
  }
  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: bool ? "line-through" : "none" }}>
        {props.text}
      </li>
      {/* This works as well  */}
      {/* {bool ? (
        <li style={{ textDecoration: "line-through" }}>{props.text} </li>
      ) : (
        <li style={{ textDecoration: "none" }}>{props.text} </li>
      )} */}
    </div>
  );
}
export default Todo;
