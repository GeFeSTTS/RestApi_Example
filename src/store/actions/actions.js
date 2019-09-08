import {
    GET_PEOPLE,
} from './types';

export const getPeople = () => dispatch => dispatch({
    type: GET_PEOPLE,
})