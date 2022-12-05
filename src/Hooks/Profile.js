import {createContext, useContext, useState} from 'react';

export const ProfileContext = createContext('');

export const ProfileProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
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
        setTotal(totalPrice);
    }
    const updateQty = (id, qty) => {
        const currentItem = cart.find(item => item.id === id);
        currentItem.qty = qty;
        if (currentItem.qty < 1) {
            console.log("cart item quantity is at 0");
            removeItem(id);
        }
        getCartTotal();
        console.log(currentItem);

    }
    const removeItem = (id) => {
        console.log('removing item');
        const cartTemp = [...cart];
        console.log("carttemp", cartTemp);
        const filtered = cartTemp.filter(item => item.id !== id);
        setCart(filtered);
        console.log(filtered);
    }

    return (
        <ProfileContext.Provider value={{
            cart: cart,
            total: total,
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