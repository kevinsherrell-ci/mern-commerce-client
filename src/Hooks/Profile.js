import {createContext, useContext, useState} from 'react';

export const ProfileContext = createContext('');

const URL = process.env.REACT_APP_ENDPOINT;
export const ProfileProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    console.log(cart)

    const createProfile = async (userId) => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify({
                user_id: userId
            })
        }
        fetch(`${URL}/profiles/create`, options)
            .then(response => response.json())
            .then(response => console.log(response));

    }
    const addToCart = (data) => {
        console.log("adding to cart");
        const existingItem = cart.find(item => item.id === data.id);
        if (existingItem === undefined || existingItem === null) {

            setCart([...cart, data]);
            return;
        }
        existingItem.qty++;
    }
    const getCartTotal = () => {
        console.log("getting cart total");

        let totalPrice = 0;
        cart.forEach(item => {
            totalPrice += (item.qty * item.price);
        })
        setTotal(totalPrice);
    }
    const updateQty = (id, qty) => {
        console.log("updating quantity", qty);
        console.log("ID: " + id);
        console.log("quantity: " + qty);
        const currentItem = cart.find(item => item.id === id);
        currentItem.qty = qty;
        getCartTotal();

    }
    const removeItem = (id) => {
        console.log("removing item from cart");
        console.log(cart);
        const cartTemp = [...cart];
        const filtered = cartTemp.filter(item => item.id !== id);
        setCart(filtered);
    }

    return (
        <ProfileContext.Provider value={{
            cart: cart,
            total: total,
            removeItem: removeItem,
            addToCart: addToCart,
            getCartTotal: getCartTotal,
            updateQty: updateQty,
            createProfile: createProfile
        }}>
            {children}
        </ProfileContext.Provider>
    )
}

export const useProfileContext = () => {
    return useContext(ProfileContext);
}