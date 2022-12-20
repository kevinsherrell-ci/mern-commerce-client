import {Outlet, redirect} from "react-router-dom";
import {useContext, useEffect, useMemo, useState} from "react";
import {MakeupContext} from "../Hooks/MakeupAPI";
import ProductCard from "../Components/ProductCard/ProductCard";
import {useProfileContext} from "../Hooks/Profile";
import {useAuthContext} from "../Hooks/Auth";
// import {uuid} from "uuidv4";
import {useNavigate} from 'react-router-dom';
import {useProductContext} from "../Hooks/Product";


const Home = () => {
    console.log('Home')
    const navigate = useNavigate();
    const {allProducts, getAllProducts} = useContext(MakeupContext);
    const {getProducts, state} = useProductContext();
    const {getProfile, _id, user_id, active} = useProfileContext();
    const {user, getSession, authenticated} = useAuthContext();
    console.log(state);

    useEffect(() => {
        getProducts();


    }, [])

        console.log(authenticated, active);
        const checkActive = async ()=>{
            const _active = await active;
            (authenticated && _active === false) && navigate('/profile/setup')
        }
        checkActive();
    const mapProducts = allProducts.map(product => {
        // const stringProduct = JSON.stringify(product);
        // console.log(product);
        return <ProductCard {...product} />
    })


    return (
        <div>
            {mapProducts}
        </div>
    )


}
export default Home;