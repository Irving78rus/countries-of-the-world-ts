import React,{useState}   from "react";
import "../App.css";
import { useDispatch } from "react-redux";
// import classNames from "classnames";
import { addTargetCountry, deleteTargetCountry } from "../redux/action";

 interface SingleCountryType{
  country:countryType
  // className:string
}
 interface countryType{
   id: string |undefined
   flags:any
   name:nameType
   translations:translationsType
   capital:string
   continents:string
   population:string
 }
 interface nameType{
  common:string
 }
 interface translationsType{
   rus:rusType
 }
 interface rusType{
  common:string
}

const SingleCountry :React.FC<SingleCountryType> = ({country })    => {

  // let classes = classNames( "Card",  className );
  const dispatch = useDispatch();
 
const [cls,setCls]=useState('Card')
console.log(cls);

  const getCountry = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(addTargetCountry( country.id));
    setCls(  `Card CardAnimation`  )
 
  };

  const deleteCountry = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(deleteTargetCountry( country.id));
    setCls(  `Card   `  )
    };
  const Card = () => {
    return (
      
        <div className={cls} id={ country.id}>
          <img
            src={ country.flags.png}
            className="countryImg"
            alt="foto"
          />
          <p>
            {" "}
            Страна: ({ country.name.common}){" "}
            { country.translations.rus.common},
          </p>
          <p>Столица: { country.capital}</p>
          <p> Континент: { country.continents}</p>
          <p> Население: { country.population}</p>
          <div className="buttons">
            
              <button onClick={getCountry} >+</button>
            <button onClick={deleteCountry}>-</button> 
            
          </div>
        </div>
       
    );
  };

  return <>
  {Card()}
  </>;
};

export default  SingleCountry 
