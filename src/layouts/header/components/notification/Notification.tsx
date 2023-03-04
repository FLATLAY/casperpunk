import { useState } from "react";

import {
  NotificationIconWrapper,
  NotificationIconComponent,

} from "./Notification-style";

import notificationIcon from "../../../../assets/icons/notification-icon.svg";

import NotificationDropdown from "./NotificationDropdown";

const Notification = () => {
    
    const [showDropdonw, setShowDropdown] = useState(false);
  const toggleDropdown = () => setShowDropdown((p) => !p);

  return (
    <>
      <NotificationIconWrapper bg={showDropdonw?"#fff":'transparent'} > 
        <NotificationIconComponent src={notificationIcon} onClick={toggleDropdown} />
      </NotificationIconWrapper>
      <NotificationDropdown show={showDropdonw} close={toggleDropdown} />
    </>
  );
}


export default Notification