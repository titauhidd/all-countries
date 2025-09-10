import React, { useState } from "react";
import "./country.css";

const Country = ({ country, handleVisitedCountries }) => {
  console.log(country);
  const { name, flags, capital, cca2 } = country;

  const [visited, setVisited] = useState(false); //--state for the visited button here;

  const handleVisited = () => {
    setVisited(!visited);
  };

  // console.log(handleVisitedCountries);

  return (
    <div className={`country ${visited ? "visitedbg" : "not"}`}>
      <h2>Name: {name.common}</h2>
      <div>
        <img src={flags.png} alt="" />
      </div>
      <p>Capital: {capital}</p>
      <p>Country-Code: {cca2}</p>
      <button>Mark As Visited</button>
      <br />
      <div>
        <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
        {visited ? "I have visited" : "I want to visit"}
      </div>
    </div>
  );
};

export default Country;
