import { useState } from "react";

import { WalletIconWrapper, WalletIconComponent } from "./Profile-style";
import { useProfile } from "../../../../hooks/useProfile/useProfile";

import ProfileDropdown from "./ProfileDropdown";
import WalletModal from "../../../../modals/wallet-modal/WalletModal";
import profileIcon from "../../../../assets/icons/profile-icon.svg";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const { profile, openCasperWallet } = useProfile();

  const toggleModal = () => setShowModal((p) => !p);

  const clickOnIcon = () => {
    if(profile) toggleModal()
    else openCasperWallet()
  }

  return (
    <>
      <WalletIconWrapper
        //bg={showModal ? "#fff" : "transparent"}
        onClick={clickOnIcon}
      >
        <WalletIconComponent src={profileIcon} />
      </WalletIconWrapper>
      <ProfileDropdown show={showModal} close={toggleModal} />
      {/* {profile ? (
        <ProfileDropdown show={showModal} close={toggleModal} />
      ) : (
        <WalletModal show={showModal} close={toggleModal} />
      )} */}
    </>
  );
};

export default Profile;
