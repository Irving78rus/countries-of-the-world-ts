import {NEW_PAGE_NUMBER,VALUE_INPUT} from './types'
 
interface initalStateType   {
    value: string
    currentPage : number
} 

const initalState = {
    value: '',
    currentPage : 1,
}
export function headerButtonsReducer(state:initalStateType  = initalState, action:any) {

    switch (action.type) {
        case VALUE_INPUT: {
            return { ...state, value: action.value  }
        }
        case NEW_PAGE_NUMBER: {
            return { ...state, currentPage: action.Pagenumber}
        }
        default:
            return state
    }
}
