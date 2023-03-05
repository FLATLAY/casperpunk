import { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import axios from "axios";
import { Box, Flex } from "@chakra-ui/react";

import {
  CreditModalContainer,
  ModalTitle,
  CloseIconComponent,
  CloseIconImg,
} from "./CreditCardModal-style";
import {
  formatCreditCardNumber,
  formatExpirationDate,
  formatCVC,
  getCardDataBasedApi,
} from "./credit-card-utils";
import BasicButton, {
  BUTTON_TYPE,
} from "../../components/basic-button/BasicButton";
import ModalWrapper from "../../../../modal/modal-wrapper/ModalWrapper";
import TextInput from "../../components/text-input/TextInput";
import closeIcon from "../../assets/icons/multiplied-icon.svg";
//
const CreditCardModal = ({ show, close , submit}) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [focus, setFocus] = useState("");

  const changeCardNumber = (e) => {
    setCardNumber(formatCreditCardNumber(e.target.value));
    setFocus("number");
  };

  const changeCardName = (e) => {
    setFocus("name");
    setCardName(e.target.value);
  };
  const changeCardExpiry = (e) => {
    setFocus("expiry");
    setCardExpiry(formatExpirationDate(e.target.value));
  };

  const changeCardCvc = (e) => {
    setFocus("cvc");
    setCardCvc(formatCVC(e.target.value));
  };

  const handleSubmit = () => {

    const token = JSON.parse(localStorage.getItem("token") || "");
    // axios
    //   .post(
    //     "https://elb.deposit.shopifycs.com/sessions",
    //     {
    //       credit_card: getCardDataBasedApi(
    //         cardNumber,
    //         cardName,
    //         cardExpiry,
    //         cardCvc
    //       ),
    //     },
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //         ...(token && { Authorization: "Bearer " + token }),
    //       },
    //     }
    //   )
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    submit()
  };

  return (
    <ModalWrapper show={show} close={close} >
      <CreditModalContainer>
        <CloseIconComponent onClick={close}>
          <CloseIconImg src={closeIcon} />
        </CloseIconComponent>
        <ModalTitle>Credit card</ModalTitle>

        <Cards
          cvc={cardCvc}
          expiry={cardExpiry}
          focused={focus}
          name={cardName}
          number={cardNumber}
        />
        <Box mb="16px"></Box>
        <TextInput
          placeholder="Card Number"
          value={cardNumber}
          change={changeCardNumber}
        />
        <Box mb="16px"></Box>
        <TextInput
          placeholder="Card Number"
          value={cardName}
          change={changeCardName}
        />
        <Box mb="16px"></Box>
        <Flex gap="30px">
          <Box w="50%">
            <TextInput
              placeholder="Card Expiry"
              value={cardExpiry}
              change={changeCardExpiry}
            />
          </Box>

          <Box w="50%">
            <TextInput
              placeholder="Card Cvc"
              value={cardCvc}
              change={changeCardCvc}
            />
          </Box>
        </Flex>
        <Box mb="16px"></Box>
        <BasicButton
          width="100%"
          maxWidth="100%"
          type={BUTTON_TYPE.DARK}
          click={handleSubmit}
        >
          Submit
        </BasicButton>
      </CreditModalContainer>
    </ModalWrapper>
  );
};

export default CreditCardModal;
