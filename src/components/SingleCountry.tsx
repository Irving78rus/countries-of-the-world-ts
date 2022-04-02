import React, { useState } from "react";
import "../App.css";
import { useDispatch } from "react-redux";
// import classNames from "classnames";
import { addTargetCountry, deleteTargetCountry } from "../redux/action";

interface SingleCountryType {
  country: countryType
  // className:string
}
interface countryType {
  id: string | undefined
  flags: any
  name: nameType
  translations: translationsType
  capital: string
  continents: string
  population: string
}
interface nameType {
  common: string
}
interface translationsType {
  rus: rusType
}
interface rusType {
  common: string
}

const SingleCountry: React.FC<SingleCountryType> = ({ country }) => {

  // let classes = classNames( "Card",  className );
  const dispatch = useDispatch();

  const [classes, setClasses] = useState('Card')


  const addCountryForComparison = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(addTargetCountry(country.id));
    setClasses(`Card CardAnimation`)

  };

  const deleteCountryFromComparison = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(deleteTargetCountry(country.id));
    setClasses(`Card`)
  };
  const Card = () => {
    return (

      <div className={classes} id={country.id}>
        <img
          src={country.flags.png}
          className="countryImg"
          alt="foto"
        />
        <p>
          Страна: ({country.name.common})
          {country.translations.rus.common},
        </p>
        <p>Столица: {country.capital}</p>
        <p> Континент: {country.continents}</p>
        <p> Население: {country.population}</p>
        <div className="buttons">

          <button onClick={addCountryForComparison} >+</button>
          <button onClick={deleteCountryFromComparison}>-</button>

        </div>
      </div>

    );
  };

  return <>
    {Card()}
  </>;
};

export default SingleCountry 
