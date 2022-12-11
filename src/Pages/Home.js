import {Outlet, redirect} from "react-router-dom";
import {useContext, useEffect, useMemo, useState} from "react";
import {MakeupContext} from "../Hooks/MakeupAPI";
import ProductCard from "../Components/ProductCard/ProductCard";
import {useProfileContext} from "../Hooks/Profile";
import {useAuthContext} from "../Hooks/Auth";
// import {uuid} from "uuidv4";
import {useNavigate} from 'react-router-dom';


const Home = () => {
    console.log('Home')
    const navigate = useNavigate();
    const {allProducts, getAllProducts} = useContext(MakeupContext);
    const {getProfile, profile} = useProfileContext();
    const {user, getSession, authenticated} = useAuthContext();


    useEffect(() => {
        if (!authenticated) {
            getSession().then(response => {
                if (response.id) {
                    getProfile(response.id)
                }
            })
        }
        if (authenticated && profile.active === false) navigate('/profile/setup');


    }, [profile])


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