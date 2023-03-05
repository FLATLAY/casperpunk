import React, { useState } from "react";
import { Flex, Input, Image } from "@chakra-ui/react";

import { InputEmail } from "./EmailComponent-style"

import flashIcon from "../../../../assets/icons/right-flash-icon.svg";

const EmailComponent = () => {
  const [email, setEmail] = useState("");

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  return (
    <Flex
      w={{ base: "320px", xl: "350px" }}
      h="57px"
      borderRadius="4px"
      overflow="hidden"
      alignItems="center"
    >
      <InputEmail
        value={email}
        onChange={changeEmail}
        placeholder="yourwork@email.com"
      />
      <Flex
        w="57px"
        h="100%"
        justifyContent="center"
        alignItems="center"
        bg="#262626"
        cursor="pointer"
      >
        <Image w="15px" h="14px" src={flashIcon} />
      </Flex>
    </Flex>
  );
};

export default EmailComponent;
