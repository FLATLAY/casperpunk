//import React, { MouseEvent } from "react";

import { ModalWrapperComponent, ModalContent } from "./ModalWrapper-style";

// interface Props {
//   children: JSX.Element[] | JSX.Element;
//   close: () => void;
// }

const ModalWrapper = ({ children, show, close }) => {
  
  const handleChildClick = (event) => event.stopPropagation();

  if (!show) return null;

  return (
    <ModalWrapperComponent onMouseDown={close}>
      <ModalContent onMouseDown={handleChildClick}>{children}</ModalContent>
    </ModalWrapperComponent>
  );
};

export default ModalWrapper;
