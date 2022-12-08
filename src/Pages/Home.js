import {Outlet, redirect} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {MakeupContext} from "../Hooks/MakeupAPI";
import ProductCard from "../Components/ProductCard/ProductCard";
import {useProfileContext} from "../Hooks/Profile";
import {useAuthContext} from "../Hooks/Auth";
// import {uuid} from "uuidv4";
import {useNavigate} from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    // const key = uuid();
    console.log("HOME");
    const {allProducts, getAllProducts} = useContext(MakeupContext);
    const profile = useProfileContext();
    const {getProfile} = profile;
    const auth = useAuthContext();
    const {loggedIn, getSession} = auth;


    useEffect(() => {
        getSession();
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