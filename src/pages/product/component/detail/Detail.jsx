import { Box, Text } from "@chakra-ui/react";
import { useState, useMemo } from "react";

import {
  ProductTitle,
  ProductPrice,
  AdsText,
  QuantityTitle,
  QuantityCounter,
  QuantityIcons,
  QuantityNumber,
  IconsGrid,
  FeatureText,
  FeatureComponent,
} from "./Detail-style";
import {
  getOptions,
  getSelectedSku,
  getFirstSku,
  getPrice,
  getProductTitle,
} from "./detail-utils";

import Colors from "../colors/Colors";
import Sizes from "../sizes/Sizes";

import ButtonsComponent from "./ButtonsComponent";

import minusIcon from "../../../../assets/icons/minus-icon.svg";
import plusIcon from "../../../../assets/icons/plus-icon.svg";
import madeIcon from "../../../../assets/icons/made-icon.svg";
import leafIcon from "../../../../assets/icons/leaf-icon.svg";
import sizeIcon from "../../../../assets/icons/size-icon.svg";
import ultraIcon from "../../../../assets/icons/ultra-icon.svg";

const Detail = ({ product }) => {
  // states
  const [selectedSku, setSelectedSku] = useState(getFirstSku(product));
  const [quantity, setQuantity] = useState(1);

  // hooks

  // constants
  const options = useMemo(() => getOptions(product), []);
  const productTitle = useMemo(() => getProductTitle(product), []);
  const productPrice = useMemo(
    () => getPrice(product.type, selectedSku),
    [selectedSku]
  );

  // change quantity
  const increaseQuantity = () => setQuantity((p) => p + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((p) => p - 1);
  };

  const changeOption = (variantId, value) => {
    let newSku = getSelectedSku(product, selectedSku, variantId, value);
    setSelectedSku(newSku);
  };

  return (
    <Box w="100%">
      <ProductTitle>{productTitle}</ProductTitle>
      <ProductPrice>{productPrice}</ProductPrice>

      <AdsText>
        Pay in 4 interest-free installments of $16.25 with ShopPay.
        <b style={{ cursor: "pointer" }}>Learn more</b>
      </AdsText>
      {options.length > 0 &&
        options.map((option, i) => {
          return (
            <Box key={i} mb={{ base: "18px", lg: "32px" }}>
              {option.variantName === "Color" ? (
                <Colors
                  imsType={product.type}
                  selectedSku={selectedSku}
                  changeOption={changeOption}
                  option={option}
                />
              ) : (
                <Sizes
                  imsType={product.type}
                  selectedSku={selectedSku}
                  changeOption={changeOption}
                  option={option}
                />
              )}
            </Box>
          );
        })}
      <QuantityTitle>Quantity</QuantityTitle>
      <QuantityCounter>
        <QuantityIcons src={minusIcon} onClick={decreaseQuantity} />
        <QuantityNumber>{quantity}</QuantityNumber>
        <QuantityIcons src={plusIcon} onClick={increaseQuantity} />
      </QuantityCounter>
      <Box w='100%' maxW='100%' p='20px 10px' display={{ base: "block", lg: "none" }} mb='24px' >
        <Text color='#121314' fontSize='16px' fontWeight='400'  maxW='100%'   dangerouslySetInnerHTML={{ __html: product.shopifyData.body_html }}></Text>
      </Box>
      <ButtonsComponent
        product={product}
        selectedSku={selectedSku}
        quantity={quantity}
      />
    </Box>
  );
};

export default Detail;


