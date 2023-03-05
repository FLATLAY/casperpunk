import { chakra } from "@chakra-ui/react";

export const FormLabel = chakra("label", {
  baseStyle: {
    fontFamily: "Manrope",
    fontWeight: "600",
    fontSize: "16px",
    color: "#27262B",
    mb: "16px",
  },
});

export const InputTag = chakra("input", {
  baseStyle: {
    w: "100%",
    bg: "#fff",
    borderRadius: "12px",
    p: "14px 16px",
    border: "1px solid",
    borderColor: " #E9E9E2",
    fontSize: "16px",
    fontWeight: "400",
    fontFamily: "Manrope",
    _placeholder: { color: "#B6B6AF" },
  },
});
