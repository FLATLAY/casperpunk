import { useMemo, useState, useEffect } from "react";
import { Flex, Text, Image } from "@chakra-ui/react";

// const currentTime = new Date(2023, 2, 8, 21, 30, 0);
import bannerDesktop from "../../assets/images/banner-desktop-image.svg";
import bannerMobile from "../../assets/images/banner-mobile-image.svg";
import dotIcon from "../../assets/icons/dot-dot.svg";
import multipliedIcon from "../../assets/icons/multiplied-icon.svg";

const Event = () => {
  const [diffrence, setDiffrence] = useState(
    +new Date(2023, 2, 8, 21, 30, 0) - +new Date()
  );
  //const [showBanner , setShowBanner]=useState(true)

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
      setDiffrence(+new Date(2023, 2, 8, 21, 30, 0) - +new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [diffrence]);


  return (
    <Flex
      w="100%"
      bgImage={{ base: bannerMobile, md: bannerDesktop }}
      h={{ base: "100px", md: "80px" }}
      backgroundSize="cover"
      px={{ base: "21px", xl: "160px" }}
      py={{ base: "8px", xl: "0px" }}
      alignItems="center"
      justifyContent="space-between"
      position="relative"
    >
      <Text
        fontFamily="Helvetica"
        fontSize="48px"
        fontWeight="500"
        color="#F9F9F6"
        css={{
          "-webkit-text-stroke": "2px black",
        }}
      >
        Limited Drop Alert!
      </Text>
      <Flex gap="16px">
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
        pos='absolute'
        right="40px"
        w="34px"
        h="34px"
        borderRadius="50%"
        border="2px solid #121314"
        bg="#fff"
        top='auto'
        bottom='auto'
        cursor='pointer'
        p="6px"
       // onClick={()=>{setShowBanner(false)}}

      />
    </Flex>
  );
};

const DigitComponent = ({ digit }: { digit: number }) => {
  return (
    <Flex
      w="38px"
      h="48px"
      bg="#FFFFFF"
      border="2px solid #121314"
      borderRadius="8px"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize="24px" fontWeight="700" color="#121314">
        {digit}
      </Text>
    </Flex>
  );
};

export default Event;
