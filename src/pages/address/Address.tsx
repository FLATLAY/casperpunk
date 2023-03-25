import { useState, useEffect } from "react";
import { Flex, Box, Image } from "@chakra-ui/react";

import { AddressButton, AddressButtonText } from "./Address-style";
import { getAddressBooks } from "../../apis/addressApi";
import { useApi } from "../../hooks/useApi/useApi";


import plusIcon from "../../assets/icons/plus-icon.svg";
import AddressComponent from "./components/AddressComponent";
import AddressPageButtons from "./components/AddressPageButtons";
import AddressModal from "../../modals/address-modal/AddressModal";
import Loading, { LOADING_SIZE } from "../../components/loading/Loading";
import PageContainer from "../../components/page-container/PageContainer";

const AddressPage = () => {
  const { getApi } = useApi();


  const [addressList, setAddressList] = useState<Array<any> | null>(null);
  const [selectedAddress, setSelectedAddress] = useState<any>(null);
  const [showAddressModal, setShowAddressModal] = useState<boolean>(false);

  const toggleModal = () => setShowAddressModal((p) => !p);

  const getAddressList = async () => {
    let result = await getApi(getAddressBooks());
    if (result) setAddressList(result);
    else setAddressList([]);
  };

  useEffect(() => {
    getAddressList();
  }, [showAddressModal]);

  const selectAddress = (address: any) => setSelectedAddress(address);


  // show loading before end calling api
  if (!addressList) {
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        w="100%"
        pt='150px'
      >
        <Loading size={LOADING_SIZE.LARGE} />
      </Flex>
    );
  }

  return (
    <PageContainer>
    <Flex justifyContent="center" alignItems="center" flexDir="column" w="100%">
      {addressList.map((address) => (
        <>
          <AddressComponent
            selectedAddress={selectedAddress}
            address={address}
            selectAddress={selectAddress}
          />
          <Box mb="32px" />
        </>
      ))}
      <Box mb="32px" />
      <AddressButton onClick={toggleModal}>
        <Image src={plusIcon} w="14px" h="14px" mr="16px" />
        <AddressButtonText>Add new address</AddressButtonText>
      </AddressButton>

      <Box mb="64px"></Box>
      <AddressPageButtons   selectedAddress={selectedAddress}/>
      <AddressModal show={showAddressModal} close={toggleModal} />
    </Flex>
    </PageContainer>
  );
};

export default AddressPage;
