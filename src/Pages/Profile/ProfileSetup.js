import {
    LoginLink,
    LoginText,
    FormInput,
    FormRow,
    LoginContainer,
    Submit,
    GuestLink,
    GuestText, FormHeader, StateInput, StateOption, ProfileText, SuccessMessage
} from "./ProfileSetupStyles";
import {useEffect, useState} from "react";
import {useAuthContext} from "../../Hooks/Auth";
import {useProfileContext} from "../../Hooks/Profile";
import {redirect, useNavigate} from "react-router-dom";

const states = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];


const ProfileSetup = () => {
    const navigate = useNavigate();
    const {profile, updateProfile, message, _id} = useProfileContext();

    const [firstName, setFirstName] = useState("")
    const [middle, setMiddle] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [address2, setAddress2] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [zip, setZip] = useState("")
    const [success, setSuccess] = useState(false);
    console.log(profile);
    const profileObject = {
        firstName: firstName,
        middleName: middle,
        lastName: lastName,
        shippingAddress: {
            address: address,
            address2: address2,
            state: state === "State" ? "" : state,
            city: city,
            zip: zip
          },
        active: true
    }
    useEffect(()=>{
        console.log(profile);
    })
    const displaySuccess =()=>{

            return <SuccessMessage>Thank you for providing us with this information. Redirecting...</SuccessMessage>

    }
    const backToHome = ()=>{
        setTimeout(()=>{
            navigate('/');
        }, 2000)
    }
    const mapStates = states.map((state, index) => {
        return <StateOption value={state} key={state + index}>{state}</StateOption>
    })
    return (

        <LoginContainer>
            <FormRow>
                <ProfileText>Welcome! In order to set up your profile, we need to get some information from
                    you</ProfileText>
            </FormRow>
            <FormRow>
                <FormInput type={"text"} placeholder={'first name'} onChange={(e) => setFirstName(e.target.value)}/>
                <FormInput type={"text"} placeholder={'middle'} onChange={(e) => setMiddle(e.target.value)}/>
                <FormInput type={"text"} placeholder={'last name'} onChange={(e) => setLastName(e.target.value)}/>
            </FormRow>
            <FormRow>
                <FormInput type={"text"} placeholder={'address'} onChange={(e) => setAddress(e.target.value)}/>
            </FormRow>
            <FormRow>
                <FormInput type={"text"} placeholder={'address2'} onChange={(e) => setAddress2(e.target.value)}/>
            </FormRow>
            <FormRow>
                <StateInput onChange={(e) => setState(e.target.value)}>
                    <StateOption value={""}>State</StateOption>
                    {mapStates}
                </StateInput>
                <FormInput type={"text"} placeholder={'city'} onChange={(e) => setCity(e.target.value)}/>
                <FormInput type={"text"} placeholder={'zip'} onChange={(e) => setZip(e.target.value)}/>
            </FormRow>
            <FormRow direction={"column"}>

                <Submit onClick={  () => {
                  const updated = updateProfile(_id, profileObject);
                  if(updated){
                      setSuccess(true);
                  }

                }}>Submit</Submit>

            </FormRow>
            {success && displaySuccess()}
            {success && backToHome()}
        </LoginContainer>
    )
}
export default ProfileSetup;