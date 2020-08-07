import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import "./index.js";
//import Boom from "./Boom";

function Row({ title }, { fetchTrending }) {
  const [recipies, setRecipies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get();
      console.log(request);
      setRecipies(request.data);
    }
    fetchData();
  }, []);

  //console.table(recipies);

  return (
    <div className="row">
      <h1>{title}</h1>

      <div className="row__posters">
        <ul>
          {recipies.map((recipi) => (
            //<div className="row__poster">
            <li>
              <div className="name" style={{ fontFamily: "Metropolis" }}>
                {recipi.name}
              </div>
              <img
                className="row__post"
                src={recipi.image}
                key={recipi.id}
                alt={recipi.name}
              />
              <div>{recipi.price}$</div>
            </li>
            //</div>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Row;
