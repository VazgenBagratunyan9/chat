import {types} from "./user.types";
import {HOST_NAME} from "../../config/config";

export function loginAction(status){
    return {
        type: types.LOGIN,
        payload: status
    }
}
export function getUserAction(token){
    return (dispatch) => {
        dispatch(loadingAction(true))
        const dataForm = new FormData();
        dataForm.append('token', token)
        fetch(HOST_NAME + '/user', {
            method: 'POST',
            body: dataForm
        }).then(jsonData => jsonData.json())
            .then(data => {
                dispatch({
                    type: types.GET_USER,
                    payload: data
                })
                dispatch(loadingAction(false))
            })
    }
}

export function loadingAction(load){
    return {
        type: types.LOADING,
        payload: load
    }
}