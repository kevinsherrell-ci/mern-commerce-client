import {useLocation} from 'react-router-dom';
import {useContext, useEffect, useState} from "react";
import {MakeupContext} from "../Hooks/MakeupAPI";

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}
const Product = () => {
    let queryParams = useQuery();
    const query = queryParams.toString();
    const [products, setProducts] = useState([]);
    const {getData, data} = useContext(MakeupContext);
    console.log(getData, data);

    useEffect(() => {
        console.log("USE STATE IS RUNNING");
        getData(query);
        setProducts(data);

    }, [query]);
    console.log("Product state", products);

    return (
        <div>
            PRODUCT PAGE {queryParams.toString()}
        </div>
    )
}
export default Product;