import {
    GET_PEOPLE
} from '../actions/types';

const initialState = {}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PEOPLE:
            return {
              ...state,  
            }
        default: return state;
    }
}