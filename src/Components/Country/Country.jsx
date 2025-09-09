import React, { useState } from "react";
import "./country.css";

const Country = ({ country }) => {
  console.log(country);
  const { name, flags, capital, cca2 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className="country">
      <h2>Name: {name.common}</h2>
      <div>
        <img src={flags.png} alt="" />
      </div>
      <p>Capital: {capital}</p>
      <p>Country-Code: {cca2}</p>
      <div>
        <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
        {visited ? "I have visited" : "I want to visit"}
      </div>
    </div>
  );
};

export default Country;
