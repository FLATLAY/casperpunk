import { useState } from "react";

import {
  AuthModalWrapper,
  CloseIconComponent,
  CloseIconImg,
  ModalTitle,
} from "./AuthModal-style";

import ModalWrapper from "../../../../modal/modal-wrapper/ModalWrapper";
import Signup from "./Signup";
import Signin from "./Signin";

import closeIcon from "../../assets/icons/multiplied-icon.svg";

const MODAL_TYPES = {
  SIGNIN: "SIGNIN",
  SINGUP: "SINGUP",
};

const AuthModal = () => {
  const [modalType, setModalType] = useState(MODAL_TYPES.SIGNIN);

  const switchModals = () => {
    modalType == MODAL_TYPES.SIGNIN
      ? setModalType(MODAL_TYPES.SINGUP)
      : setModalType(MODAL_TYPES.SIGNIN);
  };

  return (
    <ModalWrapper show={true} close={() => {}}>
      <AuthModalWrapper>
        <CloseIconComponent onClick={() => {}}>
          <CloseIconImg src={closeIcon} />
        </CloseIconComponent>
        <ModalTitle>
          {modalType == MODAL_TYPES.SIGNIN ? "Sign In" : "Sign Up"}
        </ModalTitle>
        {modalType == MODAL_TYPES.SIGNIN ? <Signin switchModal={switchModals} /> : <Signup />}
      </AuthModalWrapper>
    </ModalWrapper>
  );
};

export default AuthModal;
