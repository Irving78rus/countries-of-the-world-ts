import React, { useEffect } from "react";
import "./App.css";
import { useAppSelector, useAppDispatch } from "./hook";
import HeaderButtons from "./components/HeaderButtons";
import { Route, Routes } from "react-router-dom";
import Country from "./components/Country";
import Comparison from "./components/Comparison";
import { requestCountries } from "./redux/action";

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
      {countryLoaded > 249 ? <>
        <header className="header">
          <HeaderButtons />
        </header>

        <main className="main">
          <Routes>
            <Route path="/" element={<Country />} />
            <Route path="Comparison" element={<Comparison />} />
          </Routes>
        </main>

        <footer className="footer">
          <div>Данные о странах</div>
        </footer>
      </> : <div>Данные загружаются, подождите...</div>}

    </div>

  );
}

export default App;
