import { Box } from "@chakra-ui/react";

import { FormLabel, InputTag } from "./TextInput-style";

const TextInput = ({
  label,
  placeholder,
  type,
  value,
  change,
}: {
  label?: string;
  placeholder: string;
  type?: string;
  value?: any;
  change?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <Box w="100%">
      {label && <FormLabel>{label}</FormLabel>}
      <InputTag
        type={type ? type : "text"}
        placeholder={placeholder}
        value={value}
        onChange={change}
      />
    </Box>
  );
};

export default TextInput;
