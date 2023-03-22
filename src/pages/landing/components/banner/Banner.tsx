import { Box, Button, Image } from "@chakra-ui/react";


import bannerImage from "../../../../assets/images/banner-image.svg";

const Banner = () => {
  
  const clickOnButton = () => {
    const element = document.getElementById("product-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box w="100%" h="auto" maxH="470px" position="relative">
      <Image
        src={bannerImage}
        w="100%"
        h="auto"
        display={{ base: "none", md: "block" }}
      />
      {/* <Box
        backgroundImage={mobileBanner}
        w="100%"
        h="470px"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        display={{ base: "block", md: "none" }}
      /> */}
      <Button
        position="absolute"
        bg="#C00E1A"
        w="256px"
        borderRadius="4px"
        padding="16px"
        left={{ base: "50%", md: "11.04%" }}
        mr={{ base: "50%", md: "0" }}
        transform={{ base: "translate(-50%, -50%)", md: "translate(0%, 0%)" }}
        top={{ base: "400px", md: "55%" }}
        fontWeight="800"
        fontSize="16px"
        color="white"
        h="56px"
        _hover={{
          bg: "#C00E1A",
        }}
        onClick={clickOnButton}
      >
        SHOP COLLECTION NOW
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
