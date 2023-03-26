import { Box, Button, Text, Spinner, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { DesktopBannerImage, MobileBannerImage } from "./Banner-style";

import bannerImage from "../../../../assets/images/banner-image.svg";
import bannerImageMobile from "../../../../assets/images/banner-image-mobile.svg";

const Banner = () => {
  const [loading, setLoading] = useState(true);

  const clickOnButton = () => {
    const element = document.getElementById("product-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const img = new Image();
    const img2 = new Image();

    img.src = bannerImage;
    img2.src = bannerImageMobile;

    img.onload = () => {
      setLoading(false);
    };
    img2.onload = () => {
      setLoading(false);
    };
  }, []);

  console.log("loading ", loading);

  if (loading) {
    return (
      <Flex w="100%" py="150px" alignItems="center" justifyContent="center">
        <Spinner size="xl" color="#000" />
      </Flex>
    );
  }

  return (
    <Box w="100%" h="auto" position="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <DesktopBannerImage src={bannerImage} />
      </motion.div>
      <MobileBannerImage src={bannerImageMobile} />
    
        <Box
          position="absolute"
          top={{ base: "90px", md: "15%" }}
          left={{ base: "20px", md: "15%" }}
        >
            <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.2 }}
      >
          <Text
            fontFamily="Montserrat"
            fontWeight="800"
            fontSize={{
              base: "42px",
              md: "36px",
              lg: "44px",
              xl: "56px",
              "2xl": "72px",
            }}
            color="#FFFFFF"
            mb="20px"
          >
            Explore The
            <br /> CasperPunks <br /> Collection
          </Text>
          
          <Button
            bg="#161F2F"
            w={{ base: "114px", xl: "256px", "2xl": "320px" }}
            borderRadius="4px"
            padding={{ md: "12px", lg: "14px", xl: "16px" }}
            //mr={{ base: "50%", md: "0" }}
            // transform={{ base: "translate(-50%, -50%)", md: "translate(0%, 0%)" }}
            fontWeight="800"
            fontSize={{ base: "12px", "2xl": "24px" }}
            color="white"
            h={{
              base: "36px",
              md: "40px",
              lg: "48px",
              xl: "56px",
              "2xl": "72px",
            }}
            _hover={{
              bg: "#333",
            }}
            onClick={clickOnButton}
          >
            GET YOUR TEE
          </Button>
          </motion.div>
        </Box>
      
      {/* */}
    </Box>
  );
};

export default Banner;
