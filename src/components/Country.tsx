import "../App.css";
import React, { useEffect } from "react";
import SingleCountry from "./SingleCountry";
import { getFilteredСountries, requestCountries } from '../redux/action'
import Pagination from "./Pagination";
import { useAppSelector, useAppDispatch } from '../hook'

const Country:React.FC=()=> {
   
   
  const dispatch = useAppDispatch();
  const SearchValue = useAppSelector((state) => state.headerButtonsReducer.value);
  const filtredCountry = useAppSelector(
    (state) => state.counterReducer.filteredСountries
  );

  useEffect(() => {
    dispatch(getFilteredСountries(SearchValue));
  }, [SearchValue]);
  const countriesPerPage = 10;

  const currentPage = useAppSelector(
    (state) => state.headerButtonsReducer.currentPage
  );
  const LastCountryIndex = currentPage * countriesPerPage;
  const FirstCountryIndex = LastCountryIndex - countriesPerPage;
  const currentCountry = filtredCountry.slice(FirstCountryIndex,LastCountryIndex);

  const renderCountry = currentCountry.map((country) => (
    <SingleCountry key={country.id} country={country}   />
  ));
  return (
    <>
      <div className="container">{renderCountry}</div>

      <Pagination />

    </>
  );
}




export default Country 