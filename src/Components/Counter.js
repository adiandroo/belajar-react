import React, { useEffect, useState } from "react";
import "../Counter.css";
function Counter() {
  let count = 0;
  // useEffect(() => {
  //   window.alert('Clicked')
  // })
  const [currentState, updatedState] = useState(count);
  const handleClick = () => {
    updatedState(currentState + 1);
  };
  return (
    <>
      <div className="counter-parent">
        <div className="main-div">
          <h3>Counter {currentState}</h3>
          <button onClick={handleClick}>{currentState}</button>
        </div>
      </div>
    </>
  );
}

export default Counter;
