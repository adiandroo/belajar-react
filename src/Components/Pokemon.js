import axios from "axios";
import React, { useEffect, useState } from "react";
function Pokemon() {
  const [num, setNum] = useState("1");
  const [name, setName] = useState();
  const [moves, setMoves] = useState();
  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${num}`
      );
      setName(response.data.name);
      console.log(response.data);
      setMoves(response.data.moves[0].move.name);
    }
    getData();
  });
  return (
    <>
      <h1>You choose {num} value</h1>
      <p>You get { name }</p>
      <p>You get { moves }</p>
      <select
        name=""
        id=""
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </>
  );
}

export default Pokemon;
