import {
    CreateAccountLink,
    CreateAccountText,
    FormInput,
    FormRow, GuestLink, GuestText,
    LoginContainer,
    Submit
} from "./LoginStyles";
import {useEffect, useState} from "react";
import {FormHeader} from "../../Layouts/AuthLayoutStyles";
import {useAuthContext} from "../../Hooks/Auth";
import {useNavigate} from "react-router-dom";
import {useProfileContext} from "../../Hooks/Profile";

const Login = () => {
    const navigate = useNavigate();
    const {user, authenticated, login} = useAuthContext();
    const {getProfile, profile} = useProfileContext();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
                  console.log(user);
    const loginObject = {
        email: email,
        password: password
    }
useEffect(()=>{
    if(authenticated){
        getProfile(user.id);
        navigate('/');
    }
}, [authenticated])
    return (

        <LoginContainer>
            <FormRow>
                <FormHeader>Login</FormHeader>
            </FormRow>
            <FormRow>
                <FormInput type={"text"} onChange={(e) => setEmail(e.target.value)} placeholder={"E-Mail"}/>
            </FormRow>
            <FormRow>
                <FormInput type={"text"} onChange={(e) => setPassword(e.target.value)} placeholder={"Password"}/>
            </FormRow>
            <FormRow direction={"column"}>

                <Submit onClick={async () => {
                    login(loginObject);
                    // if (authenticated) {
                    //     navigate('/');
                    // }

                }}>Login</Submit>
                <CreateAccountText>
                    Don't have an account? <CreateAccountLink to={'/auth/register'}>Create Account</CreateAccountLink>
                </CreateAccountText>

            </FormRow>
            {/*<FormRow>*/}
            {/*    <GuestText>*/}
            {/*        Just browsing?*/}
            {/*    </GuestText>*/}
            {/*    <GuestLink to={'/'}>*/}
            {/*        Continue as Guest*/}
            {/*    </GuestLink>*/}
            {/*</FormRow>*/}

        </LoginContainer>
    )
}

export default Login;