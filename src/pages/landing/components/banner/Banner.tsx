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
        //  maxH="500px"
      />
      <Box position="absolute" top="15%" left="15%">
        <Text
          fontFamily="Montserrat"
          fontWeight="800"
          fontSize={{base:'48px',md:'36px',lg:'44px',xl:"56px",'2xl':"72px"}}
          color="#FFFFFF"
          mb="20px"
        >
          Explore The
          <br /> CasperPunks <br /> Collection
        </Text>
        <Button
          bg="#161F2F"
          w={{base:"200px" ,xl:'256px' ,'2xl':"320px" }}
          borderRadius="4px"
          padding={{md:'12px',lg:'14px',xl:"16px"}}
          //mr={{ base: "50%", md: "0" }}
          transform={{ base: "translate(-50%, -50%)", md: "translate(0%, 0%)" }}
          fontWeight="800"
          fontSize={{base:"16px" , '2xl':"24px"}}
          color="white"
          h={{md:'40px',lg:'48px',xl:"56px" , '2xl':"72px"}}
          _hover={{
            bg: "#333",
          }}
          onClick={clickOnButton}
        >
          GET YOUR TEE
        </Button>
      </Box>

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
