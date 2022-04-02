import "../App.css";
import React from "react";

import   SingleCountry   from "./SingleCountry";
import {useAppSelector} from '../hook'

const Comparison: React.FC = () => {
  const currentCountry = useAppSelector(
    (state) => state.counterReducer.currentCountry
  );
  

  const renderCountry = currentCountry.map((country) => (
    <SingleCountry key={country.id} country={country}   />
  ));
  return (
    <div className="App">
      <div className="container">{renderCountry}</div>
 
    </div>
  );
};

export default React.memo(Comparison)