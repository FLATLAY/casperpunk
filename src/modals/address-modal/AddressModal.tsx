import { Box } from "@chakra-ui/react";
import { useState, useEffect, useReducer } from "react";

// internal dependency
import {
  AddressModalContainer,
  FlexRow,
  ModalTitle,
  CloseIconComponent,
  CloseIconImg,
} from "./AddressModal-style";
import { postAddressBook, putUpdateAddress } from "../../apis/addressApi";
import { useApi } from "../../hooks/useApi/useApi";
import { initialState, reducer } from "./reducer";
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
  initialAddress,
}: {
  show: boolean;
  close: () => void;
  initialAddress?: any;
}) => {
  const { postApi, putApi } = useApi();

 
  const [addressObject, dispatch] = useReducer(reducer, initialState);
  // STATES
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialAddress !== undefined)
      dispatch({ type: "INITIALIZE", payload: initialAddress });
  }, [initialAddress]);

  // functions
  const changeAddressLine1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_ADDRESS_LINE_1", payload: e.target.value });
  };
  const changeAddressLine2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_ADDRESS_LINE_2", payload: e.target.value });
  };
  const changeCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_COUNTRY", payload: e.target.value });
  };
  const changeCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_CITY", payload: e.target.value });
  };
  const changeState = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_STATE", payload: e.target.value });
  };
  const changeZip = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_ZIP", payload: e.target.value });
  };
  const changeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_FIRST_NAME", payload: e.target.value });
  };
  const changeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_LAST_NAME", payload: e.target.value });
  };

  const submitForm = async () => {
    setLoading(true);
    let result;
    if (initialAddress === undefined) {
      result = await postApi(postAddressBook(addressObject));
    } else {
      result = await putApi(
        putUpdateAddress(addressObject, initialAddress._id)
      );
    }
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
          value={addressObject.addressLine1}
          change={changeAddressLine1}
        />
        <Box mb="16px"></Box>
        <TextInput
          label="Address line 2"
          placeholder="Address line 2"
          value={addressObject.addressLine2}
          change={changeAddressLine2}
        />
        <Box mb="16px"></Box>
        <FlexRow mb="16px">
          <TextInput
            label="Country"
            placeholder="Country"
            value={addressObject.country}
            change={changeCountry}
          />
          <TextInput
            label="State/province"
            placeholder="State/province"
            value={addressObject.state}
            change={changeState}
          />
        </FlexRow>
        <FlexRow mb="16px">
          <TextInput
            label="City"
            placeholder="City"
            value={addressObject.city}
            change={changeCity}
          />
          <TextInput
            label="Zip Code"
            placeholder="Zip Code"
            value={addressObject.zip}
            change={changeZip}
          />
        </FlexRow>
        <FlexRow mb="16px">
          <TextInput
            label="Name"
            placeholder="Name"
            value={addressObject.firstName}
            change={changeFirstName}
          />
          <TextInput
            label="Last Name"
            placeholder="Last Name"
            value={addressObject.lastName}
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
