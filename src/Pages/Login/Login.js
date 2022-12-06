import {
    CreateAccountLink,
    CreateAccountText,
    FormInput,
    FormRow,
    LoginContainer,
    Submit
} from "./LoginStyles";
import {useState} from "react";

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (

        <LoginContainer>
            <FormRow>
                <FormInput type={"text"} onClick={(e) => setEmail(e.target.value)} placeholder={"E-Mail"}/>
            </FormRow>
            <FormRow>
                <FormInput type={"text"} onClick={(e) => setPassword(e.target.value)} placeholder={"Password"}/>
            </FormRow>
            <FormRow direction={"column"}>

                <Submit>Login</Submit>
                <CreateAccountText>
                    Don't have an account? <CreateAccountLink to={'/auth/register'}>Create Account</CreateAccountLink>
                </CreateAccountText>

            </FormRow>
        </LoginContainer>
    )
}

export default Login;