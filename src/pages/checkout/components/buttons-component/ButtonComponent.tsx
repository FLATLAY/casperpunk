import { Flex, Button } from "@chakra-ui/react";

const ButtonComponent = () => {
  return (
    <Flex w="100%" alignItems="center" justifyContent="end">
      <Button
      //  display="flex"
      //  justifyContent="center"
      //  alignItems="center"
        padding="16px 60px"
        gap="8px"
        width="77px"
        height="55px"
        background="#27262B"
        borderRadius="4px"
        color='white'
      >
        Pay Now
      </Button>
    </Flex>
  );
};

export default ButtonComponent;
