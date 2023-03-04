import { Flex } from "@chakra-ui/react";


import {
  NotificationDropdownBgLayout,
  NotificationDropdownComponent,
  NotificationText,
} from "./Notification-style";

interface Props {
  close: () => void;
  show: boolean;
}

const NotificationDropdown = ({ show, close }: Props) => {


    
  if (!show) return null;


  return (
    <NotificationDropdownBgLayout onClick={close}>
      <NotificationDropdownComponent>
        <Flex
          p="8px 16px"
          bg="#fff"
          borderRadius="8px"
          justifyContent="space-between"
          alignItems="center"
        >
          <NotificationText>New notifications</NotificationText>
          <NotificationText>0</NotificationText>
        </Flex>

        {/* <Flex
          mt="8px"
          p="8px 16px"
          bg="#fff"
          borderRadius="8px"
          cursor="pointer"
        >
          <NotificationText>Your order #1051 was shipped</NotificationText>
        </Flex> */}
      </NotificationDropdownComponent>
    </NotificationDropdownBgLayout>
  );
};

export default NotificationDropdown;
