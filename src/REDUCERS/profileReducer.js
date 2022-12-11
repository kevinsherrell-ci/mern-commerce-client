import {useReducer} from 'react';

export const ACTIONS = {
    CREATE_PROFILE: 'create_profile',
    GET_PROFILE: 'get_profile',
    UPDATE_PROFILE: 'update_profile',
    CLEAR_PROFILE: 'clear_profile',
    PROFILE_ERROR: 'profile_error'
}


export const profileReducer = (state, action) => {
    switch (action.type) {
        case "create_profile":
            console.log(action.payload);
            return {profile: action.payload}
        case "get_profile":
            return {profile: action.payload}
        case "update_profile":
            return {
                ...state,
                profile: action.payload
            }
        case "clear_profile":
            return {
                profile: {}
            }
        case "profile_error":
            return {
                message: action.payload
            }
        default:
            return state;
    }
}