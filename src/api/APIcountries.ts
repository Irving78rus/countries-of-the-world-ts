import axios from 'axios';
import { error } from 'console';

export const getCountries = () => {
 
     return axios.get('https://restcountries.com/v3.1/all')
       .then((response) =>  response.data   )
       .catch(error=>console.error(error)
       ) 
        
    
   
   }
    