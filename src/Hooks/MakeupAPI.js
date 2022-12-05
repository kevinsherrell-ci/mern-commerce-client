import {createContext, useContext, useState} from 'react';

export const MakeupContext = createContext('');

export const MakeupProvider = (props) => {
    const {children} = props;
    const [data, setData] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState({});
    const [errors, setErrors] = useState();
    console.log(data);
    console.log("SELECTED PRODUCT", selectedProduct);
    const url = 'http://makeup-api.herokuapp.com/api/v1/products.json'

    // search products by query
    const getData = (queryString) => {
        const options = {
            method: "GET",
            // mode: 'no-cors'
        }

        fetch(`${url}?${queryString}`, options)
            .then(response => response.json())
            .then(data => {
                setData(data);
                return data;
            })
    }
    const getDataById = (id) => {
        const options = {
            method: "GET"
        }
        fetch(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json`, options)
            .then(response => response.json())
            .then(data => {

                setSelectedProduct(data);
            })
            .catch(err => {
                setErrors(err);
            })
    }
    const getAllProducts = ()=>{
        const options = {
            method: "GET"
        }
        fetch(`${url}`, options)
            .then(response=>response.json())
            .then(data=>{
                setData(data);
            })
            .catch(err=>{
                setErrors(err);
            })
    }
    return (
        <MakeupContext.Provider value={{
            data: data,
            selectedProduct: selectedProduct,
            getAllProducts: getAllProducts,
            errors: errors,
            getData: getData,
            getDataById: getDataById,

        }}>
            {children}
        </MakeupContext.Provider>
    )
}

export const useMakeupContext = () => {
    return useContext(MakeupContext);
}