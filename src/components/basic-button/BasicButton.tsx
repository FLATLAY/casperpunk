import * as React from "react";
import { Button, Spinner } from "@chakra-ui/react";

export const BUTTON_TYPE = {
  DARK: "DARK",
  LIGHT: "LIGHT",
};

const BasicButton = ({
  width,
  maxWidth,
  type,
  click,
  children,
  loading,
}: {
  width: string;
  maxWidth: string;
  type: string;
  click: () => void;
  children: React.ReactNode;
  loading?: boolean;
}) => {
  const isLight = type == BUTTON_TYPE.LIGHT;

  return (
    <Button
      w={width}
      maxW={maxWidth}
      p="8px 16px"
      color={isLight ? "#27262B" : "#FFFFFF"}
      bg={isLight ? "#FFFFFF" : "#27262B"}
      border="1px solid"
      borderRadius="4px"
      fontFamily="Manrope"
      fontSize="16px"
      fontWeight="400"
      borderColor="#27262B"
      disabled={loading}
      onClick={click}
    >
      {loading ? (
        <Spinner
          size="sm"
          thickness="2px"
          color={isLight ? "#27262B" : "#FFFFFF"}
        />
      ) : (
        <>{children}</>
      )}
    </Button>
  );
};

export default BasicButton;
