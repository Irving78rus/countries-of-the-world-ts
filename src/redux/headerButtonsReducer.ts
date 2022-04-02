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

// interface dispatchValueType{
//     type: typeof VALUE_INPUT
//     value: string
// }

// export function dispatchValue (  value:any  ): dispatchValueType  {
//     return {
//         type: VALUE_INPUT,
//         value,
    
//     }
// }

// interface NewPagenumberType{
//     type: typeof NEW_PAGE_NUMBER
//     Pagenumber: number
// }

// export function NewPagenumber(Pagenumber:any ): NewPagenumberType {
//     return {
//         type: NEW_PAGE_NUMBER,
//         Pagenumber
//     }
// }
 