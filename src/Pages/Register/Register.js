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
import {redirect} from "react-router-dom";

const Register = () => {
    const {register, login} = useAuthContext();
    const {createProfile} = useProfileContext();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verify, setVerify] = useState("");

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
                        login({email, password});

                    } catch (err) {
                        console.log(err);
                    }

                }}>Register</Submit>
                <LoginText>
                    Already have an account? <LoginLink to={'/auth/login'}>Log In!</LoginLink>
                </LoginText>

            </FormRow>

        </LoginContainer>
    )
}
export default Register;