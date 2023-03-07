import { useMemo, useState, useEffect } from "react";
import { Flex, Text, Image, keyframes, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

// const currentTime = new Date(2023, 2, 8, 21, 30, 0);
import bannerDesktop from "../../assets/images/banner-desktop-image.svg";
import bannerMobile from "../../assets/images/banner-mobile-image.svg";
import dotIcon from "../../assets/icons/dot-dot.svg";
import multipliedIcon from "../../assets/icons/multiplied-icon.svg";

const animationKeyframes = keyframes`
  0% { margin-top:0px; }
  100% { margin-top:-80px; }
`;

const animation = `${animationKeyframes} 1s ease-in-out`;

const Event = () => {
  const [diffrence, setDiffrence] = useState(
    +new Date(2023, 2, 8, 21, 30, 0) - +new Date()
  );
  const [showBanner, setShowBanner] = useState(true);
  const [activeAnimation, setActiveAnimation] = useState(false);

  const getDay = () => Math.floor(diffrence / (1000 * 60 * 60 * 24));
  const getHourse = () => Math.floor((diffrence / (1000 * 60 * 60)) % 24);
  const getMinutes = () => Math.floor((diffrence / 1000 / 60) % 60);
  const getSeconds = () => Math.floor((diffrence / 1000) % 60);

  const days = useMemo(getDay, [diffrence]);
  const hours = useMemo(getHourse, [diffrence]);
  const minutes = useMemo(getMinutes, [diffrence]);
  const seconds = useMemo(getSeconds, [diffrence]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDiffrence(+new Date(2023, 2, 14, 21, 30, 0) - +new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [diffrence]);

  const closeEvent = () => {
    setActiveAnimation(true);
    setTimeout(() => {
      setShowBanner(false);
    }, 1000);
  };

  return (
    <Flex
      w="100%"
      as={motion.div}
      animation={activeAnimation ? animation : ""}
      bgImage={{ base: bannerMobile, xl: bannerDesktop }}
      display={showBanner === false ? "none" : "flex"}
      flexDir={{ base: "column", xl: "row" }}
      h={{ base: "100px", xl: "80px" }}
      backgroundSize="cover"
      px={{ base: "21px", xl: "160px" }}
      py={{ base: "8px", xl: "0px" }}
      alignItems={{ base: "start", xl: "center" }}
      justifyContent="space-between"
      position="relative"
      transition="top 2s"
    >
      <Text
        fontFamily="Helvetica"
        fontSize={{ base: "28px", xl: "48px" }}
        fontWeight="500"
        color="#F9F9F6"
        css={{
          "-webkit-text-stroke": "2px black",
        }}
      >
        Limited Drop Alert!
      </Text>

      <Flex gap={{ base: "4px", xl: "16px" }}>
        <Flex gap="4px">
          <DigitComponent digit={Math.floor(days / 10)} />{" "}
          <DigitComponent digit={Math.floor(days % 10)} />
        </Flex>

        <Image src={dotIcon} />
        <Flex gap="4px">
          <DigitComponent digit={Math.floor(hours / 10)} />{" "}
          <DigitComponent digit={Math.floor(hours % 10)} />
        </Flex>
        <Image src={dotIcon} />
        <Flex gap="4px">
          <DigitComponent digit={Math.floor(minutes / 10)} />{" "}
          <DigitComponent digit={Math.floor(minutes % 10)} />
        </Flex>
        <Image src={dotIcon} />
        <Flex gap="4px">
          <DigitComponent digit={Math.floor(seconds / 10)} />{" "}
          <DigitComponent digit={Math.floor(seconds % 10)} />
        </Flex>
      </Flex>

      <Image
        src={multipliedIcon}
        pos="absolute"
        right="40px"
        w="34px"
        h="34px"
        borderRadius="50%"
        border="2px solid #121314"
        bg="#fff"
        top="auto"
        bottom="auto"
        cursor="pointer"
        p="6px"
        onClick={closeEvent}
      />
    </Flex>
  );
};

const DigitComponent = ({ digit }: { digit: number }) => {
  return (
    <Flex
      w={{ base: "24px", xl: "38px" }}
      h={{ base: "32px", xl: "48px" }}
      bg="#FFFFFF"
      border="2px solid #121314"
      borderRadius="8px"
      justifyContent="center"
      alignItems="center"
    >
      <Text
        fontSize={{ base: "16px", xl: "24px" }}
        fontWeight="700"
        color="#121314"
      >
        {digit}
      </Text>
    </Flex>
  );
};

export default Event;
