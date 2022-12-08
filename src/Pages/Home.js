import {Outlet} from "react-router-dom";
import {useContext, useEffect} from "react";
import {MakeupContext} from "../Hooks/MakeupAPI";
import ProductCard from "../Components/ProductCard/ProductCard";
// import {uuid} from "uuidv4";

const Home = () => {
    // const key = uuid();
    console.log("HOME");
    const {allProducts, getAllProducts} = useContext(MakeupContext);

    useEffect(() => {
        // if (allProducts === null || allProducts.length === 0) {
        //     getAllProducts();
        // }

    }, [])
    const mapProducts = allProducts.map(product => {
        return <ProductCard {...product} />
    })
    return (
        <div>
            {mapProducts}
        </div>
    )
}
export default Home;