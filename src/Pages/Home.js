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
    const {allProducts, getAllProducts} = useContext(MakeupContext);
    const {getProfile, profile} = useProfileContext();
    const {loggedIn, getSession, currentUser} = useAuthContext();

    useEffect(() => {
        getSession()
            .then(response => {
                if(response === null || response === undefined){
                    return;
                }
                if (response.result) {
                    getProfile(response.result.id);
                }
                if(!profile.active){
                    console.log("this profile is not active");
                    navigate('/profile/setup');
                }
            })
            .catch(err => {
                console.log(err);
            })
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