import {
  COUNT,
  SELECT_COUNTRY,
  DELETE_COUNTRY,
  GET_FILTER_COUNTRY,
} from "./types";
 interface initalStateType{
  counter:number
  countries:Array<any>
  currentCountry:Array<any>
  filterCountry:Array<any>
 }

const initalState = {
  countries: [],
  currentCountry: [],
  counter: 0,
  filterCountry: [],
 
};
export function counterReducer(state: initalStateType = initalState, action:any) {
  switch (action.type) {
    case COUNT: {
      return {
        ...state,
        countries: action.countries.map((country:Array<any>, index:number) => {
          return { ...country, id: index };
        }),
      };
    }
    case SELECT_COUNTRY: {
      if (
        state.currentCountry.every(
          (country) => country.id !== action.targetCountryId
        )
      ) {
        return {
          ...state,

          currentCountry: [
            ...state.currentCountry,
            ...state.countries.filter(
              (country) => country.id  === action.targetCountryId
            ),
          ],
        };
      } else {
        return state;
      }
    }
    case DELETE_COUNTRY: {
      return {
        ...state,

        currentCountry: [
          ...state.currentCountry.filter(
            (country) => country.id !== action.targetCountryId
          ),
        ],
      };
    }
    case GET_FILTER_COUNTRY: {
      return {
        ...state,

        filterCountry: [
          ...state.countries.filter(
            (country) =>
              country.name.common
                .toLowerCase()
                .includes(action.value.toLowerCase()) ||
              country.translations.rus.common
                .toLowerCase()
                .includes(action.value.toLowerCase()) ||
              country.continents[0]
                .toLowerCase()
                .includes(action.value.toLowerCase())
          ),
        ],
      };
    }
    default:
      return state;
     
   
  }
}
