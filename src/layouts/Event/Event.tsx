import { useMemo, useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";

// const currentTime = new Date(2023, 2, 8, 21, 30, 0);
import bannerDesktop from "../../assets/images/banner-desktop-image.svg";
import bannerMobile from "../../assets/images/banner-mobile-image.svg";

const Event = () => {
  const [diffrence, setDiffrence] = useState(
    +new Date(2023, 2, 8, 21, 30, 0) - +new Date()
  );

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
      backgroundSize='cover'
      px={{ base: "21px", xl: "160px" }}
      py={{ base: "8px", xl: "0px" }}
    ></Flex>
  );
};

export default Event;
