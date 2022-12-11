import {createContext, useContext, useReducer, useState} from 'react';
import {useProfileContext} from "./Profile";
import {redirect, useNavigate} from "react-router-dom";
import {ACTIONS, authReducer} from '../REDUCERS/AuthReducer';

export const AuthContext = createContext('');

const URL = process.env.REACT_APP_ENDPOINT;
const {GET_SESSION, REGISTER_USER, LOGIN_USER, LOGOUT_USER, AUTH_ERROR} = ACTIONS;

export const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, {
        authenticated: false,
        user: {},
        message: []
    });

    // const [sessionFound, setSessionFound] = useState(false);
    // const [loggedIn, setLoggedIn] = useState(false);
    // const [currentUser, setCurrentUser] = useState({});
    // const [errors, setErrors] = useState();
    const getSession = async () => {
        console.log("retrieving session...");
        const options = {
            method: "POST",
            credentials: "include"
        }

        const sessionReq = await fetch(`${URL}/users/reconnect`, options);
        const sessionRes = await sessionReq.json();

        if (sessionRes.error) {
            dispatch({
                type: AUTH_ERROR,
                payload: sessionRes.error
            })
            return sessionRes.error;
        }
        dispatch({
            type: GET_SESSION,
            payload: sessionRes.data
        })
        return sessionRes.data;


    }
    // const getSession = async () => {
    //     console.log("retrieving session...")
    //     const options = {
    //         method: "POST",
    //         credentials: "include"
    //     }
    //     const request = await fetch(`${URL}/users/reconnect`, options);
    //     const response = await request.json();
    //     if (Object.keys(response).includes("result")) {
    //         setSessionFound(true);
    //         setLoggedIn(true);
    //         setCurrentUser(response.result);
    //         console.log(response.result);
    //     }
    //     return response.result;
    // }

    // const register = async (obj) => {
    //     console.log(obj);
    //     const options = {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(obj)
    //     }
    //     const registerUser = await fetch(`${URL}/users/register`, options);
    //     const result = await registerUser.json();
    //     console.log(result);
    //     return result;
    // }
    const register = async (obj) => {
        console.log(obj);
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        }

        const regRequest = await fetch(`${URL}/users/register`, options);
        const regResponse = await regRequest.json();

        if (regResponse.error) {
            return dispatch({
                type: AUTH_ERROR,
                payload: regResponse.error
            })
        }
        dispatch({
            type: REGISTER_USER,
            payload: regResponse.data
        })

        return regResponse.data
        // const profileReq = await fetch(`${URL}/profiles/create`, {...options, body: regResponse._id});
        // const profileRes = await profileReq.json();

        // fetch(`${URL}/users/register`, options)
        //     .then(response => response.json())
        //     .then(response => {
        //         if (response.error) {
        //             return dispatch({
        //                 type: AUTH_ERROR,
        //                 payload: response.error
        //             })
        //         }
        //         return dispatch({
        //             type: REGISTER_USER,
        //             payload: response.data
        //         })
        //     })
        //     .then(() => {
        //         console.log(state.user);
        //     })
        //     .catch(err => console.log(err));

    }

    // const login = async (obj) => {
    //     try {
    //         const options = {
    //             method: "POST",
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             credentials: "include",
    //             body: JSON.stringify(obj)
    //         }
    //         const loginUser = await fetch(`${URL}/users/login`, options);
    //         const result = await loginUser.json();
    //         console.log(result.success);
    //         if (result.success) {
    //             setLoggedIn(true);
    //             setCurrentUser(result.result);
    //         }
    //         return result.success;
    //     } catch (err) {
    //         setErrors(errors);
    //     }
    // }
    const login = async (obj) => {

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include",
            body: JSON.stringify(obj)
        }


        fetch(`${URL}/users/login`, options)
            .then(response => response.json())
            .then(response => {
                if (response.error) {
                    return dispatch({
                        type: AUTH_ERROR,
                        payload: response.error
                    })
                }
                return dispatch({
                    type: LOGIN_USER,
                    payload: response.data
                })
            })
            .catch(err => console.log(err))

    }
    const logout = () => {
        const options = {
            method: "DELETE",
            credentials: 'include'
        }
        fetch(`${URL}/users/logout`, options)
            .then(response => response.json())
            .then((response) => {
                if (response.error) {
                    return dispatch({
                        type: AUTH_ERROR,
                        payload: response.error
                    })
                }
                return dispatch({
                    type: LOGOUT_USER,
                    payload: response.data
                })
            })
            .catch(err => console.log(err))
    }
    return (
        <AuthContext.Provider value={{
            ...state,
            register: register,
            login: login,
            logout: logout,
            getSession: getSession,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(AuthContext);
}