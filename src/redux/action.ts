import {VALUE_INPUT,NEW_PAGE_NUMBER,COUNT,SELECT_COUNTRY,DELETE_COUNTRY,GET_FILTER_COUNTRY} from './types'
import { getCountries } from "../api/APIcountries";
 
interface saveCountriesType{
    type: typeof COUNT
    countries:Array<any>
}

export function saveCountries(countries:Array<any>):saveCountriesType {
    return {
      type: COUNT,
      countries,
    };
  }
 
  interface requestCountriesType{
    response:Array<any>
  }
   
  export const requestCountries = ()   => async (dispatch :any ) => {
    let response = await getCountries();
  
    dispatch(saveCountries(response));
  };


  export function dispatchValue (value:any) {
    return {
        type: VALUE_INPUT,
        value
    }
}
export function NewPageNumber(Pagenumber:any){
    return {
        type: NEW_PAGE_NUMBER,
        Pagenumber
    }
}

export function addTargetCountry(targetCountryId:any) {
    return {
      type: SELECT_COUNTRY,
      targetCountryId,
    };
  }
  export function deleteTargetCountry(targetCountryId:any) {
    return {
      type: DELETE_COUNTRY,
      targetCountryId,
    };
  }
  
  export function getFilteredСountries(value:any) {
    return {
      type: GET_FILTER_COUNTRY,
      value,
    };
  }