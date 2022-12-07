import {createContext, useContext, useState} from 'react';

export const AuthContext = createContext('');

const URL = process.env.REACT_APP_ENDPOINT;
console.log(URL);
export const AuthProvider = ({children}) => {

    const register = async (obj) => {
        console.log(obj);
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        }
        fetch(`${URL}/users/register`, options)
            .then(response => response.json())
            .then(response => console.log(response));
    }

    return (
        <AuthContext.Provider value={{
            register: register
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(AuthContext);
}