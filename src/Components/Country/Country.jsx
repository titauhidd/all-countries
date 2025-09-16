import { useState } from "react";
import "./country.css";

const Country = ({ country, handleaddtoVisited }) => {
  // console.log(country)
  const { name, population, flags, cca2 } = country;

  const [visited, setVisited] = useState(false);

  const handlesetVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className="country">
      {/* <h2>Country</h2> */}
      <img src={flags.png} alt="" />
      <p>Name: {name.common}</p>
      <p>Popaulation: {population}</p>
      <p>Code: {cca2}</p>
      <div>
        <button onClick={() => handleaddtoVisited(country)}>Add to List</button>
        <br />
        <button onClick={() => handlesetVisited()}>
          {visited ? "Visited" : "Going"}
        </button>
        {visited ? "Visited This Country" : "Going to Visit"}
      </div>
    </div>
  );
};

export default Country;
