import {useReducer} from 'react';

export const ACTIONS = {
    GET_SESSION: "get_session",
    REGISTER_USER: "register_user",
    LOGIN_USER: "login_user",
    LOGOUT_USER: 'logout_user',
    AUTH_ERROR: 'auth_error'
}


export const authReducer = (state, action) => {
    switch (action.type) {
        case 'get_session':
            console.log(action.payload);
            return {authenticated: true, user: action.payload}
        case 'register_user':
            return {
                authenticated: true,
                user: action.payload
            }
        case 'login_user':
            return {
                authenticated: true,
                user: action.payload
            }
        case 'logout_user':
            return {
                authenticated: false,
                user: {}
            }
        case 'auth_error':
            return {message: action.payload}
        default:
            return state;
    }
}