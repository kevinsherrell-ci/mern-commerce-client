import {Outlet} from "react-router-dom";
import {ContentWrapper, InnerContainer, ProfileSetupContainer} from "./ProfileSetupLayoutStyles";

const ProfileSetupLayout = () => {
    return (
        <ProfileSetupContainer>
            <InnerContainer>
                <ContentWrapper>
                    <Outlet/>
                </ContentWrapper>
            </InnerContainer>
        </ProfileSetupContainer>
    )
}

export default ProfileSetupLayout;