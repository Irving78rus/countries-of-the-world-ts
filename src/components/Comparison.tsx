import "../App.css";
import React from "react";
import SingleCountry from "./SingleCountry";
import { useAppSelector } from '../hook'

const Comparison: React.FC = () => {
  const countriesToCompare = useAppSelector(
    (state) => state.counterReducer.currentCountry
  );

  return (
    <div className="App">
      <div className="container">{countriesToCompare.map((country) => (
        <SingleCountry key={country.id} country={country} />))}
      </div>
    </div>
  );
};

export default React.memo(Comparison)