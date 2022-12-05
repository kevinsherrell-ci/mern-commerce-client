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
    const getCartTotal = () => {
        let totalPrice = 0;
        cart.forEach(item => {
            totalPrice += (item.qty * item.price);
        })
        return totalPrice;
    }
    const updateQty = (id, qty) => {
        const currentItem = cart.find(item => item.id === id);
        currentItem.qty = qty;
        console.log(currentItem);

    }
    return (
        <ProfileContext.Provider value={{
            cart: cart,
            addToCart: addToCart,
            getCartTotal: getCartTotal,
            updateQty: updateQty
        }}>
            {children}
        </ProfileContext.Provider>
    )
}

export const useProfileContext = () => {
    return useContext(ProfileContext);
}