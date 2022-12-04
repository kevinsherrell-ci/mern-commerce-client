import Sidebar from '../Components/Sidebar/Sidebar';
import NavBar from "../Components/NavBar/NavBar";
import {Outlet} from "react-router-dom";
import {ContentContainer, GlobalContainer, MainContainer} from "./GlobalLayoutStyles";

const GlobalLayout = () => {
    return (
        <GlobalContainer>
            <NavBar/>
            <MainContainer>
                <Sidebar width={'10%'}/>
                <ContentContainer>
                    <Outlet/>
                </ContentContainer>
            </MainContainer>

        </GlobalContainer>
    )
}
export default GlobalLayout;