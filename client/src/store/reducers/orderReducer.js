import { CRETE_ORDER, CLEAR_ORDER } from "../actions/types"

export const orderReducer = (state = {}, action ) => {
    switch(action.type) {
        case CRETE_ORDER: 
        return {order: action.data.order}
         
        case CLEAR_ORDER: 
        return {order: false}
         
        default: 
        return state
         
    }
}