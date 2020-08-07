import React from "react";
function Boom({ recipi }) {
  return <img className="row__post" src={recipi.image} alt={recipi.name} />;
}
export default Boom;
