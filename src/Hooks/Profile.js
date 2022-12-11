import {createContext, useContext, useReducer, useState} from 'react';
import {ACTIONS, profileReducer} from "../REDUCERS/profileReducer";


export const ProfileContext = createContext('');
const {CREATE_PROFILE, GET_PROFILE, UPDATE_PROFILE, CLEAR_PROFILE, PROFILE_ERROR} = ACTIONS;
const URL = process.env.REACT_APP_ENDPOINT;
export const ProfileProvider = ({children}) => {
    const [state, dispatch] = useReducer(profileReducer, {
        profile: {},
        message: []
    });
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const createProfile = (userId) => {
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
            .then(response => {
                if (response.error) {
                    return dispatch({
                        type: PROFILE_ERROR,
                        payload: response.error
                    })
                }
                return dispatch({
                    type: CREATE_PROFILE,
                    payload: response.data
                })
            })
            .catch(err => console.log(err))

    }
    const getProfile = async (userId) => {
        console.log("fetching profile");
        const options = {
            method: "GET",
            credentials: "include"
        }

        const profileReq =  await fetch(`${URL}/profiles/${userId}`, options);
       const profileRes = await profileReq.json();


                if(profileRes.error){
                     dispatch({
                        type: PROFILE_ERROR,
                        payload: profileRes.error
                    })
                    return profileRes.error
                }
                 dispatch({
                    type: GET_PROFILE,
                    payload: profileRes.data
                })
                return profileRes.data


    }
    const updateProfile = async (profileId, updateObj) => {
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify(updateObj)
        }
        fetch(`${URL}/profiles/update/${profileId}`, options)
            .then(response=>response.json())
            .then(response=>{
                if(response.error){
                    dispatch({
                        type: PROFILE_ERROR,
                        payload: response.error
                    })
                    return false;
                }
                 dispatch({
                    type: UPDATE_PROFILE,
                    payload: response.data
                })
                return true;
            })


    }
    const clearProfile = () => {
        dispatch({
            type: CLEAR_PROFILE,
            payload: {}
        })
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
            createProfile: createProfile,
            getProfile: getProfile,
            profile: state.profile,
            updateProfile: updateProfile,
            clearProfile: clearProfile
        }}>
            {children}
        </ProfileContext.Provider>
    )
}

export const useProfileContext = () => {
    return useContext(ProfileContext);
}