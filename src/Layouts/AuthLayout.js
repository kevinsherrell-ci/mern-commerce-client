import {
    APILink,
    AuthContainer,
    AuthHeader,
    AuthLogo,
    AuthSub, ContentWrapper, GuestLink, GuestText,
    Logo,
    LogoContainer,
    LogoRight
} from "./AuthLayoutStyles";
import {InnerContainer} from "./AuthLayoutStyles";
import {Outlet} from "react-router-dom";

const AuthLayout = ({login, register}) => {
    return (
        <AuthContainer>
            <InnerContainer>
                <GuestText>Just browsing? <GuestLink to={'/'}>Continue as Guest</GuestLink></GuestText>
                <ContentWrapper>
                    <LogoContainer>
                        <Logo>MERN<LogoRight>commerce</LogoRight></Logo>
                        <AuthSub>Product data provided by the <APILink href={'https://makeup-api.herokuapp.com/'}>Makeup API</APILink></AuthSub>
                    </LogoContainer>
                    <Outlet/>
                </ContentWrapper>

            </InnerContainer>
        </AuthContainer>
    )
}

export default AuthLayout;