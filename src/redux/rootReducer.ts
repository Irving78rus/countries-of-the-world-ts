import { combineReducers  } from 'redux'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux' 
import type { RootState, AppDispatch } from '../index'
import { counterReducer } from './countiesReducer';
import { headerButtonsReducer } from './headerButtonsReducer';
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()


export const rootReducer = combineReducers({
     counterReducer,
     headerButtonsReducer
 
  })