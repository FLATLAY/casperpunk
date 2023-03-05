import { Box } from "@chakra-ui/react";
import { useState } from "react";

// internal dependency
import {
  AddressModalContainer,
  FlexRow,
  ModalTitle,
  CloseIconComponent,
  CloseIconImg,
} from "./AddressModal-style";
import { postAddressBook } from "../../apis/addressApi";
import { useApi } from "../../hooks/useApi/useApi";
// components
import ModalWrapper from "../modal-wrapper/ModalWrapper";
import TextInput from "../../components/text-input/TextInput";
import BasicButton, {
  BUTTON_TYPE,
} from "../../components/basic-button/BasicButton";

import closeIcon from "../../assets/icons/multiplied-icon.svg";

const AddressModal = ({
  show,
  close,
}: {
  show: boolean;
  close: () => void;
}) => {
  const { postApi } = useApi();

  // STATES
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  // functions
  const changeAddressLine1 = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAddressLine1(e.target.value);
  const changeAddressLine2 = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAddressLine2(e.target.value);
  const changeCountry = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCountry(e.target.value);
  const changeCity = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCity(e.target.value);
  const changeState = (e: React.ChangeEvent<HTMLInputElement>) =>
    setState(e.target.value);
  const changeZip = (e: React.ChangeEvent<HTMLInputElement>) =>
    setZip(e.target.value);
  const changeFirstName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFirstName(e.target.value);
  const changeLastName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLastName(e.target.value);
  // "addressType": "SHOP"

  const submitForm = async () => {
    const addressObj = {
      addressLine1: addressLine1,
      addressLine2: addressLine2,
      country: country,
      city: city,
      state: state,
      zip: zip,
      firstName: firstName,
      lastName: lastName,
      addressType: "CUSTOMER",
    };
    setLoading(true);
    let result = await postApi(postAddressBook(addressObj));
    setLoading(false);
    if (result) close();
  };

  return (
    <ModalWrapper show={show} close={close}>
      <AddressModalContainer>
        <CloseIconComponent onClick={close}>
          <CloseIconImg src={closeIcon} />
        </CloseIconComponent>
        <ModalTitle>New address</ModalTitle>
        <TextInput
          label="Address line 1"
          placeholder="Address line 1"
          value={addressLine1}
          change={changeAddressLine1}
        />
        <Box mb="16px"></Box>
        <TextInput
          label="Address line 2"
          placeholder="Address line 2"
          value={addressLine2}
          change={changeAddressLine2}
        />
        <Box mb="16px"></Box>
        <FlexRow mb="16px">
          <TextInput
            label="Country"
            placeholder="Country"
            value={country}
            change={changeCountry}
          />
          <TextInput
            label="State/province"
            placeholder="State/province"
            value={state}
            change={changeState}
          />
        </FlexRow>
        <FlexRow mb="16px">
          <TextInput
            label="City"
            placeholder="City"
            value={city}
            change={changeCity}
          />
          <TextInput
            label="Zip Code"
            placeholder="Zip Code"
            value={zip}
            change={changeZip}
          />
        </FlexRow>
        <FlexRow mb="16px">
          <TextInput
            label="Name"
            placeholder="Name"
            value={firstName}
            change={changeFirstName}
          />
          <TextInput
            label="Last Name"
            placeholder="Last Name"
            value={lastName}
            change={changeLastName}
          />
        </FlexRow>
        <FlexRow>
          <BasicButton
            click={close}
            width="100%"
            maxWidth="100%"
            type={BUTTON_TYPE.LIGHT}
            loading={loading}
          >
            Cancel
          </BasicButton>

          <BasicButton
            click={submitForm}
            width="100%"
            maxWidth="100%"
            type={BUTTON_TYPE.DARK}
            loading={loading}
          >
            Submit
          </BasicButton>
        </FlexRow>
      </AddressModalContainer>
    </ModalWrapper>
  );
};

export default AddressModal;
