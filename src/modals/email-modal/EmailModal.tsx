import { useState } from "react";
import { Box } from "@chakra-ui/layout";

import {
  EmailModalContainer,
  CloseIconComponent,
  CloseIconImg,
  ModalTitle,
} from "./EmailModal-style";
import { putUser } from "../../apis/userApi";
import { useApi } from "../../hooks/useApi/useApi";
import { useProfile } from "../../hooks/useProfile/useProfile";
import { useToastify } from "../../context/ToastifyContext/ToastifyContext";

import ModalWrapper from "../modal-wrapper/ModalWrapper";
import TextInput from "../../components/text-input/TextInput";
import closeIcon from "../../assets/icons/multiplied-icon.svg";

import BasicButton, {
  BUTTON_TYPE,
} from "../../components/basic-button/BasicButton";

const EmailModal = ({ show, close }: { show: boolean; close: () => void }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const { putApi } = useApi();
  const { updateProfile } = useProfile();
  const { errorToast } = useToastify();

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const submitForm = async () => {
    let regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/;
    if (regx.test(email)) {
      setLoading(true);
      let result = await putApi(putUser({ email: email }));
      setLoading(false);
      if (result) {
        updateProfile();
        close();
      }
    } else {
      errorToast("Invalid email");
    }
  };

  return (
    <ModalWrapper show={show} close={close}>
      <EmailModalContainer>
        <CloseIconComponent onClick={close}>
          <CloseIconImg src={closeIcon} />
        </CloseIconComponent>
        <ModalTitle>Email</ModalTitle>
        <TextInput
          label="Email"
          placeholder="Email"
          value={email}
          change={changeEmail}
        />
        <Box mb="32px"></Box>
        <BasicButton
          click={submitForm}
          width="100%"
          maxWidth="100%"
          type={BUTTON_TYPE.DARK}
          loading={loading}
        >
          Submit
        </BasicButton>
      </EmailModalContainer>
    </ModalWrapper>
  );
};
export default EmailModal;
