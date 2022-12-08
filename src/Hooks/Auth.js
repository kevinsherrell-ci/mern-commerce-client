import {createContext, useContext, useState} from 'react';
import {useProfileContext} from "./Profile";
import {redirect, useNavigate} from "react-router-dom";

export const AuthContext = createContext('');

const URL = process.env.REACT_APP_ENDPOINT;
console.log(URL);
export const AuthProvider = ({children}) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [errors, setErrors] = useState();
    const getSession = async () => {
        const options = {
            method: "POST",
            credentials: "include"
        }
        const reconnect = await fetch(`${URL}/users/reconnect`, options);
        const result = await reconnect.json();
        if (Object.keys(result).includes("result")) {
            setLoggedIn(true);
            setCurrentUser(result.result);
            console.log("there is a current user");
            return result.result;
        }

    }

    const register = async (obj) => {
        console.log(obj);
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        }
        const registerUser = await fetch(`${URL}/users/register`, options);
        const result = await registerUser.json();
        console.log(result);
        return result;
    }

    const login = async (obj) => {
        console.log(obj);

        try {
            const options = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: "include",
                body: JSON.stringify(obj)
            }
            const loginUser = await fetch(`${URL}/users/login`, options);
            const result = await loginUser.json();
            console.log(result.success);
            if (result.success) {
                setLoggedIn(true);
                setCurrentUser(result.result);
            }
            return result.success;
        } catch (err) {
            setErrors(errors);
        }
    }
    const logout = () => {
        console.log(URL);
        console.log("logout");
        const options = {
            method: "DELETE",
            credentials: 'include'
        }
        fetch(`${URL}/users/logout`, options)
            .then(response => response.json())
            .then((response) => {
                setLoggedIn(false);
                setCurrentUser(null);
                console.log(response);
            })
            .catch(errors => {
                setErrors(errors);
            })
    }
    return (
        <AuthContext.Provider value={{
            register: register,
            login: login,
            logout: logout,
            getSession: getSession,
            loggedIn: loggedIn,
            currentUser: currentUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(AuthContext);
}