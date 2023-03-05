
import { Box , Image} from "@chakra-ui/react"


import desktopBanner from "../../../../assets/images/banner-desktop.svg"
import mobileBanner from "./../../../../assets/images/banner-mobile.svg"

const Banner = () => {
    return <Box w='100%' h={{base:'464px' , xl:'417px'}}  >
        <Image src={desktopBanner} w='100%' h='auto' display={{base:'none', xl:'block'}} />
        <Image src={mobileBanner} w='100%' h='auto' display={{base:'block', xl:'none'}}  />
    </Box>
}

export default Banner