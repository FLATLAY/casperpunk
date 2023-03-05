import { Box, Flex, Text } from "@chakra-ui/react";

import TextInput from "../../components/text-input/TextInput";
import BasicButton, {
  BUTTON_TYPE,
} from "../../components/basic-button/BasicButton";

const Signup = () => {
  return (
    <Box w="100%">
      <TextInput type="text" placeholder="Email" />
      <Box mb="24px"></Box>
      <TextInput type="password" placeholder="password" />
      <Box mb="24px"></Box>
      <TextInput type="password" placeholder="Confirm Your Password" />
      <Box mb="24px"></Box>
      <BasicButton click={()=>{}} width="100%" maxWidth="auto" type={BUTTON_TYPE.DARK}>
        Sign Up
      </BasicButton>
    </Box>
  );
};

export default Signup;
