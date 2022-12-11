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

    useEffect(() => {
        getData(query);
        setProducts(data);

    }, [query]);
    const mapData = data.map(product => {
        return <ProductCard {...product} product={{...product}} key={product.id}/>
    })
    return (
        <ProductPageContainer>
            {mapData}
        </ProductPageContainer>
    )
}
export default Product;