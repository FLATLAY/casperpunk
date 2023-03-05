import { useState } from "react";
import { useSelector } from "react-redux";

import { WalletIconWrapper, WalletIconComponent } from "./Profile-style";
import { selectCurrentUser } from "../../../../store/user/user.selector";

import ProfileDropdown from "./ProfileDropdown";
import WalletModal from "../../../../modals/wallet-modal/WalletModal";
import profileIcon from "../../../../assets/icons/profile-icon.svg";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
   const user = useSelector(selectCurrentUser);

  const toggleModal = () => setShowModal((p) => !p);

  return (
    <>
      <WalletIconWrapper
        bg={showModal ? "#fff" : "transparent"}
        onClick={toggleModal}
      >
        <WalletIconComponent src={profileIcon} />
      </WalletIconWrapper>
      <WalletModal show={showModal} close={toggleModal} />
      {user ? (
      <ProfileDropdown show={showModal} close={toggleModal} />
    ) : (
      <WalletModal show={showModal} close={toggleModal} />
    )}
    </>
  );
};

export default Profile;
