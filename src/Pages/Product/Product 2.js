import {Outlet, useLocation} from 'react-router-dom';
import {useContext, useEffect, useState} from "react";
import {MakeupContext} from "../../Hooks/MakeupAPI";
import ProductCard from '../../Components/ProductCard/ProductCard';
import {ProductPageContainer} from "./ProudctStyles";

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
    const mapData = data.map(product => {
        console.log("this should be mapping data....")
        console.log(product);
        return <ProductCard {...product}/>
    })
    return (
        <ProductPageContainer>
            {mapData}
        </ProductPageContainer>
    )
}
export default Product;