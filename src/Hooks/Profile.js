import {createContext, useContext, useState} from 'react';

export const ProfileContext = createContext('');

export const ProfileProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    console.log("Profile", cart);
    const addToCart = (data) => {
        setCart([...cart, data]);
    }

    return (
        <ProfileContext.Provider value={{
            cart: cart,
            addToCart: addToCart

        }}>
            {children}
        </ProfileContext.Provider>
    )
}

export const useProfileContext = () => {
    return useContext(ProfileContext);
}