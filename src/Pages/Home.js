import {Outlet} from "react-router-dom";
import {useContext, useEffect} from "react";
import {MakeupContext} from "../Hooks/MakeupAPI";
import ProductCard from "../Components/ProductCard/ProductCard";

const Home = () => {
    const {data, getAllProducts} = useContext(MakeupContext);

    useEffect(() => {
        getAllProducts();
    }, [])
    const mapProducts = data.map(product => {
        return <ProductCard {...product}/>
    })
    return (
        <div>
            {mapProducts}
        </div>
    )
}
export default Home;