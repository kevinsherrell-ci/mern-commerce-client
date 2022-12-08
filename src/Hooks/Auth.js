import {createContext, useContext, useState} from 'react';
import {useProfileContext} from "./Profile";

export const AuthContext = createContext('');

const URL = process.env.REACT_APP_ENDPOINT;
console.log(URL);
export const AuthProvider = ({children}) => {
    const profile = useProfileContext();
    const {createProfile} = profile;
    const [loggedIn, setLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState();
    console.log(loggedIn, currentUser);
    const [errors, setErrors] = useState();
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
            setLoggedIn(true);
            setCurrentUser(result.result);
        } catch (err) {
            setErrors(errors);
        }
    }
    const logout = ()=>{
        console.log(URL);
        console.log("logout");
        const options = {
            method: "DELETE",
            credentials: 'include'
        }
        fetch(`${URL}/users/logout`, options)
            .then(response=>response.json())
            .then((response)=>{
                setLoggedIn(false);
                console.log(response);
            })
            .catch(errors=>{
                setErrors(errors);
            })
    }
    return (
        <AuthContext.Provider value={{
            register: register,
            login: login,
            logout: logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(AuthContext);
}