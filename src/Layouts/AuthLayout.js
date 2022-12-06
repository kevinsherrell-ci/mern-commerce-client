import {AuthContainer, AuthHeader, Logo, LogoRight} from "./AuthLayoutStyles";
import {InnerContainer} from "./AuthLayoutStyles";
import {Outlet} from "react-router-dom";

const AuthLayout = ({login, register}) => {
    return (
        <AuthContainer>
            <InnerContainer>
                <AuthHeader>
                    <Logo>MERN<LogoRight>commerce</LogoRight></Logo>
                </AuthHeader>
                <Outlet/>
            </InnerContainer>
        </AuthContainer>
    )
}

export default AuthLayout;