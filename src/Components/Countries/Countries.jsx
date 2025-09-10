import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countrys, setCountrys] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,cca2"
    )
      .then((res) => res.json())
      .then((data) => {
        setCountrys(data);
        // console.log(data);
      });
  }, []);

  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
    console.log(country);
  };
  return (
    <div>
      <div>
        <h2>Visited Countries: {visitedCountries.length}</h2>
      </div>
      <h2>Countries: {countrys.length} </h2>
      <div className="countrys">
        {countrys.map((countrydata) => {
          return (
            <Country
              key={countrys.cca2}
              handleVisitedCountries={handleVisitedCountries}
              country={countrydata}
            ></Country>
          );
        })}
      </div>
    </div>
  );
};

export default Countries;
