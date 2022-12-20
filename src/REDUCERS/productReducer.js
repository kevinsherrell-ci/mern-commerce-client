import {useReducer} from 'react';

export const ACTIONS = {
    GET_IDs: 'get_ids',
    GET_PRODUCTS: 'get_products',
    PRODUCT_ERROR: 'product_error'
}


export const productReducer = (state, action) => {
    console.log("reducer running product");
    switch (action.type) {
        case "get_ids":
            console.log(action.payload);
            return action.payload;
        case "get_products":
            console.log("payload", action.payload);
            return {
                ...state,
                products: action.payload
            }
        case "product_error":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}