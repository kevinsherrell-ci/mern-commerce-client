import {createContext, useContext, useState} from 'react';

export const MakeupContext = createContext('');

export const MakeupProvider = (props)=>{
    const {children} = props;
    const [data, setData] = useState([]);
    console.log(data);
    const url ='http://makeup-api.herokuapp.com/api/v1/products.json'

    const getData = (queryString)=>{
        const options = {
            method: "GET",
            // mode: 'no-cors'
        }

        fetch(`${url}?${queryString}`, options)
            .then(response=>response.json())
            .then(data=>{
                setData(data);
                return data;
            })
    }
    return (
        <MakeupContext.Provider value={{
            data: data,
            getData: getData
        }}>
            {children}
        </MakeupContext.Provider>
    )
}

export const useMakeupContext = ()=>{
    return useContext(MakeupContext);
}