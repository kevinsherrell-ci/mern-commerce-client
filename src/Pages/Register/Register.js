import {
    LoginLink,
    LoginText,
    FormInput,
    FormRow,
    LoginContainer,
    Submit,
    GuestLink,
    GuestText, FormHeader
} from "./RegisterStyles";
import {useState} from "react";

const Register = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [verify, setVerify] = useState();

    const registerObject = {
        email: email,
        password: password,
        verify: verify
    }

    return (

        <LoginContainer>
            <FormRow>
                <FormHeader>Create Account</FormHeader>
            </FormRow>
            <FormRow>
                <FormInput type={"text"} onClick={(e) => setEmail(e.target.value)} placeholder={"E-Mail"}/>
            </FormRow>
            <FormRow>
                <FormInput type={"text"} onClick={(e) => setPassword(e.target.value)} placeholder={"Password"}/>
            </FormRow>
            <FormRow>
                <FormInput type={"text"} onClick={(e) => setVerify(e.target.value)} placeholder={"Verify Password"}/>
            </FormRow>
            <FormRow direction={"column"}>

                <Submit>Login</Submit>
                <LoginText>
                    Already have an account? <LoginLink to={'/auth/login'}>Log In!</LoginLink>
                </LoginText>

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
export default Register;