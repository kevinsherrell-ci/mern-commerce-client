import Sidebar from '../Components/Sidebar/Sidebar';
import NavBar from "../Components/NavBar/NavBar";
import {Outlet} from "react-router-dom";
import {ContentContainer, GlobalContainer, InnerContainer, MainContainer} from "./GlobalLayoutStyles";
import {useAuthContext} from "../Hooks/Auth";

const GlobalLayout = () => {
    const auth =useAuthContext();
    const {logout} = auth;
    return (
        <GlobalContainer>
            <NavBar/>
            <MainContainer>
                <InnerContainer>
                    <Sidebar width={'20%'}/>
                    <ContentContainer>
                        <Outlet/>
                    </ContentContainer>
                </InnerContainer>

            </MainContainer>
<button onClick={()=>logout()}>LOGOUT</button>
        </GlobalContainer>
    )
}
export default GlobalLayout;