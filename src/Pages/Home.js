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
    const {_profile, _setProfile} = useState({...profile});
    if (user && Object.keys(user).length === 0) getSession();
    // if(user && Object.keys(user).length > 0) getProfile(user.id);
    console.log(user);
    // if (Object.keys(user).length > 0 && user.id) {
    //     getProfile(user.id);
    // }
    useEffect(() => {

        // if(profile.active){
        //     console.log("active");
        // }
        // if(!profile.active){
        //     console.log("not active");
        //     navigate('/profile/setup');
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