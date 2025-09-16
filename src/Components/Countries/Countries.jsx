import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countrys, setCountrys] = useState([]);
  const [addtovisited, setaddtoVisited] = useState([]);

  const handleaddtoVisited = (country) => {
    // console.log("added");
    // console.log(country);
    setaddtoVisited([...addtovisited, country]);
  };
  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,cca2"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountrys(data);
      });
  }, []);
  return (
    <div>
      <h2>Countries: {countrys.length} </h2>
      <div>
        <h2>Country Visited: {addtovisited.length}</h2>
        {addtovisited.map((vcountry, idx) => {
          return <li key={idx}>{vcountry.name.common}</li>;
        })}
      </div>
      <div className="countrys">
        {countrys.map((countrydata) => {
          return (
            <Country
              key={countrydata.cca2}
              country={countrydata}
              handleaddtoVisited={handleaddtoVisited}
            ></Country>
          );
        })}
      </div>
    </div>
  );
};

export default Countries;
