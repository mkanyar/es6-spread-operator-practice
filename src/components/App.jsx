import React, { useState } from "react";
import Todo from "./Todo";
function App() {
  const [item, setItem] = useState("");
  const [array, setArray] = useState([]);
  function handleChange(event) {
    const itemName = event.target.value;
    setItem(itemName);
  }
  function handleClick() {
    setArray((prevValue) => {
      return [...prevValue, item];
    });
    setItem("");
  }
  function deleteItem(id) {
    //delete an item. Return an array that satisfy the condition:
    // the condition being the index of the previous values has to be different than the id of the clicked item
    setArray((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List </h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={item} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {array.map((task, i) => (
            <Todo text={task} key={i} id={i} checked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
