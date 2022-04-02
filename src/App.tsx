import React , { useEffect }from 'react';
import logo from './logo.svg';
import './App.css';
import { SiteDescription } from './components/SiteDescription';
import {useAppSelector,useAppDispatch} from './hook'
import HeaderButtons from './components/HeaderButtons';
import { Route, Routes } from 'react-router-dom';
import Country from './components/Country';
import Comparison from './components/Comparison';
import { requestCountries } from './redux/action';


function App() {
  const dispatch = useAppDispatch();
    useEffect(() => {
      dispatch(requestCountries());
    }, []);

  const countryLoaded = useAppSelector(
    (state) => state.counterReducer.countries.length
  );



  return (
    <div className="App">

      <div className="header" >

        <HeaderButtons />
         
      </div>
      {countryLoaded>249?null:"Загрузка подождите..."   }  
      
      <Routes>
      <Route path="/" element={<SiteDescription />} />
        <Route path="navigation" element={<Country />} />
        <Route path="Comparison" element={<Comparison />} />
      </Routes>
    </div>
  );
}

export default App;
