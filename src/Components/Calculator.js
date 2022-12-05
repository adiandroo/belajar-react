import React, { useState } from "react";
import "../Calculator.css";
function Calculator() {
  const [result, setResult] = useState("");

  const clickHandler = (event) => {
    setResult(result.concat(event.target.value));
  };

  const clearButton = () => {
    setResult("");
  };

  const calculateFunction = () => {
    setResult(eval(result).toString());
  };
  return (
    <>
      <div className="calculator-main-styling">
        <input
          className="input-calculator"
          type="text"
          placeholder="0"
          id="answer"
          value={result}
        />
        <div className="button-action">
          <div className="button-number">
            <input type="button" value="9" onClick={clickHandler} />
            <input type="button" value="8" onClick={clickHandler} />
            <input type="button" value="7" onClick={clickHandler} />
            <input type="button" value="6" onClick={clickHandler} />
            <input type="button" value="5" onClick={clickHandler} />
            <input type="button" value="4" onClick={clickHandler} />
            <input type="button" value="3" onClick={clickHandler} />
            <input type="button" value="2" onClick={clickHandler} />
            <input type="button" value="1" onClick={clickHandler} />
            <br />
            <input type="button" value="0" onClick={clickHandler} />
          </div>
          <div className="button-operation">
            <input type="button" value="+" onClick={clickHandler} />
            <input type="button" value="-" onClick={clickHandler} />
            <input type="button" value="*" onClick={clickHandler} />
            <input type="button" value="/" onClick={clickHandler} />
            <input type="button" value="%" onClick={clickHandler} />
            <input type="button" value="." onClick={clickHandler} />
            <input type="button" value="Clear" onClick={clearButton} />
            <input type="button" value="=" onClick={calculateFunction} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
