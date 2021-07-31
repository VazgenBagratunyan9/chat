import {types} from "./user.types";

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
        fetch('https://bewedoc.ru/api/user', {
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