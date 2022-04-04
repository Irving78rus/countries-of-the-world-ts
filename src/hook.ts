import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './index'
import { useLayoutEffect, useState } from 'react'
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useTheme =()=>{
    const  [theme,setTheme]=useState(localStorage.getItem("app-theme")||'dark')
useLayoutEffect(()=>{
    document.documentElement.setAttribute('data-theme',theme)
    localStorage.setItem("app-theme",theme)
},[theme])
return{theme,setTheme}
}