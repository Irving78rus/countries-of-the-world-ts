import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import { dispatchValue, NewPagenumber } from '../redux/action'
import '../App.css';
import { useAppSelector, useAppDispatch } from '../hook'
const HeaderButtons: React.FC = () => {
    const [Value, setValue] = useState('');
    const dispatch = useAppDispatch()

    const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);

    }
    const firstPage = 1
    useEffect(() => {
        dispatch(dispatchValue(Value))
        dispatch(NewPagenumber(firstPage))

    }, [Value]);
    const counterCountry = useAppSelector(state => state.counterReducer.currentCountry.length)

    return (
        <div >
            <div className="pt15">
                <NavLink to="/" className="link-button ">Главная</NavLink>
                <NavLink to="/navigation" onClick={() => setValue('North America')} className="link-button ">North America</NavLink>
                <NavLink to="/navigation" onClick={() => setValue('Africa')} className="link-button">Africa</NavLink>
                <NavLink to="/navigation" onClick={() => setValue('Oceania')} className="link-button">Oceania</NavLink>
                <NavLink to="/navigation" onClick={() => setValue('Europe')} className="link-button">Europe</NavLink>
                <NavLink to="/navigation" onClick={() => setValue('Asia')} className="link-button">Asia</NavLink>
                <NavLink to="/navigation" onClick={() => setValue('Antarctica')} className="link-button">Antarctica</NavLink>
                <NavLink to="/navigation" onClick={() => setValue('South America')} className="link-button">South America</NavLink>
                <NavLink to="/navigation" onClick={() => setValue('')} className="link-button">Все</NavLink>
                <NavLink to="/Comparison" className="link-button  ">Comparison {counterCountry ? <span className='addCountry'>{counterCountry}</span> : null}</NavLink>

            </div>

            <div className="Search ">
                Найти страну (Eng or Rus leng)
                <input type='test' value={Value} onChange={handleInput} />
                <button>search</button>
            </div>
        </div>
    )
}


export default React.memo(HeaderButtons)