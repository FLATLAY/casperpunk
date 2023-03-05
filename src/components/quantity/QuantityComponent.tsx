import {
  QuantityCounter,
  QuantityIcons,
  QuantityNumber,
} from "./QuantityComponent-style";

import minusIcon from "../../assets/icons/minus-icon.svg";
import plusIcon from "../../assets/icons/plus-icon.svg";

const QuantityComponent = ({
  quantity,
  plusFunction,
  minusFunction,
}: {
  quantity: number;
  plusFunction: () => void;
  minusFunction: () => void;
}) => {
  return (
    <QuantityCounter>
      <QuantityIcons src={minusIcon} onClick={minusFunction} />
      <QuantityNumber>{quantity}</QuantityNumber>
      <QuantityIcons src={plusIcon} onClick={plusFunction} />
    </QuantityCounter>
  );
};

export default QuantityComponent;
