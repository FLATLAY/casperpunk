import { Box, Flex } from "@chakra-ui/react";

const ColorComponent = ({ colors }: { colors: string[] }) => {

  return (
    <Flex w="100%" alignItems="center" justifyContent="center" gap="5px">
      {colors.map((color: string) => (
        <Box w="15px" h="15px" borderRadius="50%" bg={color} border='1px solid black' />
      ))}
    </Flex>
  );
};

export default ColorComponent;
