import Sidebar from '../Components/Sidebar/Sidebar';
import NavBar from "../Components/NavBar/NavBar";
import {Outlet} from "react-router-dom";
import {ContentContainer, GlobalContainer, InnerContainer, MainContainer} from "./GlobalLayoutStyles";
import {useAuthContext} from "../Hooks/Auth";

const GlobalLayout = () => {

    return (
        <GlobalContainer>
            <NavBar/>
            <MainContainer>
                <InnerContainer>
                    <Sidebar/>
                    <ContentContainer>
                        <Outlet/>
                    </ContentContainer>
                </InnerContainer>
            </MainContainer>
        </GlobalContainer>
    )
}
export default GlobalLayout;