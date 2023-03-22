import {createContext, useContext, useReducer, useState} from 'react';

import {ACTIONS, productReducer} from "../REDUCERS/productReducer";


export const ProductContext = createContext('');
const {GET_IDs, GET_PRODUCTS, PRODUCT_ERROR} = ACTIONS;
const URL = process.env.REACT_APP_ENDPOINT;
export const ProductProvider = ({children}) => {
    const [state, dispatch] = useReducer(productReducer, {
        allIds: [],
        products: [],
        messages: []
    });


    const getProducts = async (query, body) => {
        query = query || "";
        console.log("fetching profile");
        const options = {
            method: "GET",
            credentials: "include",
            body: body || null
        }

        const productReq = await fetch(`${URL}/api/products/find${query && query}`, options);
        const productRes = await productReq.json();
        console.log(productRes);

        if (productReq.error) {
            dispatch({
                type: PRODUCT_ERROR,
                payload: productRes.error
            })
            return productRes.error
        }
        dispatch({
            type: GET_PRODUCTS,
            payload: productRes.data
        })
        return productRes.data


    }


    return (
        <ProductContext.Provider value={{
            ...state,
            getProducts: getProducts
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductContext = () => {
    return useContext(ProductContext);
}