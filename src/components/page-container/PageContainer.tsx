import { Box } from "@chakra-ui/react";

const PageContainer = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) => {
  return (
    <Box
      w="100%"
      h="auto"
      bg="#F9F9F6"
      display="flex"
      justifyContent="center"
      p={{ base: "20px 21px 50px 21px", lg: "100px 20px 90px 20px" }}
    >
      <Box w="100%" maxW="1200px">
        {children}
      </Box>
    </Box>
  );
};

export default PageContainer;
