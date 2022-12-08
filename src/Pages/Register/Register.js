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
import {useAuthContext} from "../../Hooks/Auth";
import {useProfileContext} from "../../Hooks/Profile";

const Register = () => {
    const Auth = useAuthContext();
    const profile = useProfileContext();
    const {register} = Auth;
    const {createProfile} = profile;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verify, setVerify] = useState("");
    console.log(email);
    console.log(password);
    console.log(verify);
    const registerObject = {
        email: email,
        password: password,
        verify: verify
    }
    console.log(registerObject);
    return (

        <LoginContainer>
            <FormRow>
                <FormHeader>Create Account</FormHeader>
            </FormRow>
            <FormRow>
                <FormInput type={"text"} onChange={(e) => setEmail(e.target.value)} placeholder={"E-Mail"}/>
            </FormRow>
            <FormRow>
                <FormInput type={"text"} onChange={(e) => setPassword(e.target.value)} placeholder={"Password"}/>
            </FormRow>
            <FormRow>
                <FormInput type={"text"} onChange={(e) => setVerify(e.target.value)} placeholder={"Verify Password"}/>
            </FormRow>
            <FormRow direction={"column"}>

                <Submit onClick={async () => {
                    try {
                        const registerUser = await register(registerObject);
                        createProfile(registerUser.result.insertedId);
                    } catch (err) {
                        console.log(err);
                    }

                }}>Register</Submit>
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