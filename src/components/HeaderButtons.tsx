import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import { dispatchValue, NewPageNumber } from '../redux/action'
import '../App.css';
import { useAppSelector, useAppDispatch, useTheme } from '../hook'
import Earth from './Earth';
const HeaderButtons: React.FC = () => {

    const { theme, setTheme } = useTheme()

    const handleLightThemeClick = () => {
        setTheme('light')
    }
    const handleDarkThemeClick = () => {
        setTheme('dark')
    }



    const [Value, setValue] = useState('');
    const dispatch = useAppDispatch()

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);

    }
    const firstPage = 1
    useEffect(() => {
        dispatch(dispatchValue(Value))
        dispatch(NewPageNumber(firstPage))

    }, [Value]);
    const counterCountry = useAppSelector(state => state.counterReducer.currentCountry.length)
    const continents = ['North America', 'Africa', 'Oceania', 'Europe', 'Asia', 'Antarctica', 'South America']
    return (
        <>
             

                {/* <NavLink to="/" className="link-button ">Главная</NavLink> */}
                <ul>
                {continents.map((continent, i) => <NavLink to="/" key={i} onClick={() => setValue(continent)} className="link-button ">{continent}</NavLink>)}
                <NavLink to="/" onClick={() => setValue('')} className="link-button">Все</NavLink>
                <NavLink to="/Comparison" className="link-button  ">Comparison {counterCountry ? <span className='addCountry'>{counterCountry}</span> : null}</NavLink>
                </ul>
                
            
            <div className="header-bottom ">
                <div>
                    <button className="link-button togle" onClick={handleLightThemeClick}>light</button>
                    <button className="link-button togle" onClick={handleDarkThemeClick} >dark</button>
                    <Earth />
                </div>
                <div className="Search "> Найти страну (Eng or Rus leng)
                    <input type='text' value={Value} onChange={handleInput} />
                    <button className="link-button">search</button></div>

            </div>
        </>
    )
}


export default React.memo(HeaderButtons)