import {types} from "./user.types";

const initialState = {
    status: false,
    data: [],
    loading: false
}

export const  userReducer = (state = initialState, {type, payload}) =>{
    switch (type) {
        case types.LOGIN:
            return {...state, status: payload }
        case types.GET_USER:
            return {...state, status: payload.status, data: payload.user }
        case types.LOADING:
            return {...state, loading: payload}
        default:
            return state;
    }
}
