import {createContext, useContext, useState} from 'react';

export const ProfileContext = createContext('');

export const ProfileProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    console.log("Profile", cart);
    const addToCart = (data) => {
        const existingItem = cart.find(item => item.id === data.id);
        if (existingItem === undefined || existingItem === null) {

            setCart([...cart, data]);
            return;
        }
        existingItem.qty++;
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