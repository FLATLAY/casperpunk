import { Box, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import { ComponentWrapper, Text700, Text400 } from "./AddressComponent-style";

import BasicButton, {
  BUTTON_TYPE,
} from "../../../components/basic-button/BasicButton";
//import EditAddressModal from "./EditAddressModal";
import AddressModal from "../../../modals/address-modal/AddressModal";

const AddressComponent = ({
  selectedAddress,
  address,
  selectAddress,
  updateList,
}: {
  selectedAddress: any;
  address: any;
  selectAddress: (id: string) => void;
  updateList: () => void;
}) => {
  const [showModal, setShowModal] = useState(false);

  const selectFunction = () => selectAddress(address);
  const toggleModal = () => setShowModal((p) => !p);

  useEffect(() => {
    updateList();
  }, [showModal]);

  return (
    <ComponentWrapper
      borderColor={
        selectedAddress && selectedAddress._id == address._id
          ? "#262626"
          : "#EFECDC"
      }
    >
      <Text700>
        {address.firstName} {address.lastName}
      </Text700>
      <Box mb="8px"></Box>
      <Text700>
        {address.addressLine1} {address.addressLine2}
      </Text700>
      <Box mb="16px"></Box>
      <Text400>
        {address.state}, {address.city}, {address.zip}
      </Text400>
      <Box mb="8px"></Box>
      <Text400>{address.country}</Text400>
      <Box mb="16px"></Box>
      <Flex alignItems="center" justifyContent="space-between">
        <Box w={{ base: "auto", md: "200px" }}>
          <BasicButton
            click={selectFunction}
            type={BUTTON_TYPE.DARK}
            width="100%"
            maxWidth="100%"
          >
            Select
          </BasicButton>
        </Box>

        <Flex alignItems="center" gap={{ base: "8px", md: "15px" }}>
          <Box w={{ base: "auto", md: "200px" }}>
            <BasicButton
              click={toggleModal}
              type={BUTTON_TYPE.DARK}
              width="100%"
              maxWidth="100%"
            >
              Edit
            </BasicButton>
          </Box>
          <Box w={{ base: "auto", md: "200px" }}>
            <BasicButton
              click={() => {}}
              type={BUTTON_TYPE.LIGHT}
              width="100%"
              maxWidth="100%"
            >
              Delete
            </BasicButton>
          </Box>
        </Flex>
      </Flex>
      <AddressModal
        show={showModal}
        close={toggleModal}
        initialAddress={address}
      />
    </ComponentWrapper>
  );
};

export default AddressComponent;
