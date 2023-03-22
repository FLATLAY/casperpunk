import { Box, Button, Image, Text } from "@chakra-ui/react";

import bannerImage from "../../../../assets/images/banner-image.svg";

const Banner = () => {
  const clickOnButton = () => {
    const element = document.getElementById("product-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box w="100%" h="auto" position="relative">
      <Image
        src={bannerImage}
        w="100%"
        h="auto"
        display={{ base: "none", md: "block" }}
        maxH="100%"
      />
      <Text
        fontFamily="Montserrat"
        fontWeight="800"
        fontSize="56px"
        color="#FFFFFF"
        position="absolute"
        top="15%"
        left="15%"
      >
        Explore The
        <br /> CasperPunks <br /> Collection
      </Text>
      <Button
        position="absolute"
        bg="#161F2F"
        w="256px"
        borderRadius="4px"
        padding="16px"
        left={{ base: "50%", md: "15%" }}
        mr={{ base: "50%", md: "0" }}
        transform={{ base: "translate(-50%, -50%)", md: "translate(0%, 0%)" }}
        top={{ base: "400px", md: "65%" }}
        fontWeight="800"
        fontSize="16px"
        color="white"
        h="56px"
        _hover={{
          bg: "#333",
        }}
        onClick={clickOnButton}
      >
        GET YOUR TEE
      </Button>
      {/* <Image
        src={mobileBanner}
        w="100%"
        h="auto"
        maxH='470px'
        display={{ base: "block", md: "none" }}
      /> */}
    </Box>
  );
};

export default Banner;
