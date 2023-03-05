import { Spinner , Box } from "@chakra-ui/react";

export const LOADING_SIZE = {
  SMALL: "sm",
  MEDIUM: "md",
  LARGE: "xl",
};

const Loading = ({ size }: { size: string }) => {
   
  return <Spinner size={size} thickness="10px" color="#121314" />;
};

export default Loading;
