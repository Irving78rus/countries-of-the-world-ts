import React, { useEffect } from "react";
import "./App.css";
import { SiteDescription } from "./components/SiteDescription";
import { useAppSelector, useAppDispatch } from "./hook";
import HeaderButtons from "./components/HeaderButtons";
import { Route, Routes } from "react-router-dom";
import Country from "./components/Country";
import Comparison from "./components/Comparison";
import { requestCountries } from "./redux/action";
import { useTheme } from "./hook";
import Earth from "./components/Earth";
function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(requestCountries());
  }, []);

  const countryLoaded = useAppSelector(
    (state) => state.counterReducer.countries.length
  );
  // локал сторедж дарк тему футер
  return (
    <div className="App">
      <header className="header">
        <HeaderButtons />
      </header>
      {countryLoaded > 249 ?  <div><Country /></div> : <div>Данные загружаются, подождите...</div> }

      <main className="main">
        <Routes>
          {/* <Route
            path="/"
            element={<SiteDescription />}
          /> */}
          {/* <Route path="/" element={<Country />} /> */}
          <Route path="Comparison" element={<Comparison />} />
        </Routes>
      </main>

      <footer className="footer">
        <div>Данные о странах</div>
      </footer>
    </div>
  );
}

export default App;
