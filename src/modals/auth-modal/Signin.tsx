import { Box, Flex, Text } from "@chakra-ui/react";

import TextInput from "../../components/text-input/TextInput";
import BasicButton, {
  BUTTON_TYPE,
} from "../../components/basic-button/BasicButton";

const Signin = ({switchModal}:{switchModal:()=>void}) => {
  return (
    <Box w="100%">
      <TextInput type="text" placeholder="Email" />
      <Box mb="24px"></Box>
      <TextInput type="password" placeholder="password" />
      <Box mb="24px"></Box>
      <Flex
      //  gap={{base:'8px',lg:"20px"}}
        alignItems="center"
        justifyContent="space-between"
        mb="24px"
      >
        <Box w={{ base: "auto", lg: "112px" }}>
          <BasicButton click={()=>{}} width="100%" maxWidth="auto" type={BUTTON_TYPE.DARK}>
            Sign in
          </BasicButton>
        </Box>
        <Text
          fontFamily="Manrope"
          fontWeight="700"
          fontSize="14px"
          textAlign="right"
          textDecorationLine="underline"
          color="#27262B"
          cursor="pointer"
        >
          Forgot your password?
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="center" onClick={switchModal}>
        <Text
          fontFamily="Manrope"
          fontWeight="400"
          fontSize="16px"
          color="#27262B"
        >
          Don’t have an account?
        </Text>
        <Text
          fontFamily="Manrope"
          fontWeight="600"
          fontSize="16px"
          textDecorationLine="underline"
          color="#27262B"
          cursor="pointer"
        >
          Create now
        </Text>
      </Flex>
    </Box>
  );
};

export default Signin;
