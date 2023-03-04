import { useState } from "react";

import { WalletIconWrapper, WalletIconComponent } from "./Profile-style";

import ProfileDropdown from "./ProfileDropdown";
import profileIcon from "../../../../assets/icons/profile-icon.svg";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  // const user = useSelector(selectCurrentUser);

  const toggleModal = () => setShowModal((p) => !p);

  return (
    <>
      <WalletIconWrapper
        bg={showModal ? "#fff" : "transparent"}
        onClick={toggleModal}
      >
        <WalletIconComponent src={profileIcon} />
      </WalletIconWrapper>
      <ProfileDropdown show={showModal} close={toggleModal} />
      {/* {user ? (
      <WalletDropdown show={showModal} close={toggleModal} />
    ) : (
      <WalletModal show={showModal} close={toggleModal} />
    )} */}
    </>
  );
};

export default Profile;
