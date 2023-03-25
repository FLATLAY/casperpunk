import { useMemo, useState } from "react";
import { Box, Flex, Image, Spinner } from "@chakra-ui/react";

import {
  TableRow,
  ProductComponent,
  ProductImage,
  ProductTitle,
  SkuText,
  PriceText,
  DeleteIcon,
  TableHeader,
} from "./ItemComponent-style";

import { IMS_TYPES } from "../../../../constant/ims-types";
import { useCart } from "../../../../hooks/useCart/useCart";
import {
  getProductImage,
  getProductTitle,
} from "../../../../utils/product/product-utils";

import QuantityComponent from "../../../../components/quantity/QuantityComponent";

import deleteIcon from "../../../../assets/icons/delete-icon.svg";

const ItemComponent = ({ item }: any) => {
  const [loading, setLoading] = useState<boolean>(false);

  const { deleteItemFromCart, increaseItemQuantity, decreaseItemQuantity } =
    useCart();

  const prodcutImage = useMemo(() => getProductImage(item.product), [item]);
  const prodcutTitle = useMemo(() => getProductTitle(item.product), [item]);
  const productPrice = useMemo(
    () =>
      item.product.type == IMS_TYPES.DROPLINKED
        ? item.skuID.price.toFixed(2)
        : item.variant.price,
    [item]
  );

  const productTotalPrice = useMemo(
    () =>
      item.product.type == IMS_TYPES.DROPLINKED
        ? item.quantity * item.skuID.price
        : item.quantity * parseFloat(item.variant.price),
    [item]
  ).toFixed(2);

  const increaseQuantity = async () => {
   // increaseItemQuantity(item);
  };

  const decreaseQuantity = async () => {
   // decreaseItemQuantity(item);
  };

  const deleteItem = async () => {
    setLoading(true);
    await deleteItemFromCart(item.skuID._id);
    setLoading(false);
  };

  // const getVariants = () => {
  //   return item.product.type == IMS_TYPES.DROPLINKED
  //     ? item.skuID.options.map((option: any) => (
  //         <SkuText>
  //           {option.variantID == "62a989e21f2c2bbc5b1e7154" ? "Color" : "Size"}:{" "}
  //           {option.value}
  //         </SkuText>
  //       ))
  //     : item.variant.option_values.map((option: any) => (
  //         <SkuText>
  //           {option.name}: {option.value}
  //         </SkuText>
  //       ));
  // };
  //<Spinner size="sm" thickness="3px" color="#121314" />
  return (
    <>
      <TableRow key={item._id}>
        <ProductComponent>
          <ProductImage src={prodcutImage} />
          <Flex flexDir="column" justifyContent="center">
            <ProductTitle>{prodcutTitle}</ProductTitle>
            {/* {getVariants()} */}
          </Flex>
        </ProductComponent>
        <td>
          <QuantityComponent
            plusFunction={increaseQuantity}
            minusFunction={decreaseQuantity}
            quantity={item.quantity}
          />
        </td>
        <td>
          <PriceText>{productPrice}USD</PriceText>
        </td>
        <td>
          <PriceText>{productTotalPrice}USD</PriceText>
        </td>
        <td>
          <DeleteIcon onClick={deleteItem}>
            {loading ? (
              <Spinner size="sm" thickness="1px" color="#fff" />
            ) : (
              <Image src={deleteIcon} w="20px" h="20px" />
            )}
          </DeleteIcon>
        </td>
      </TableRow>

      <Box display={{ base: "block", md: "none" }}>
        <Flex
          w="100%"
          justifyContent="space-between"
          alignItems="center"
          mb="32px"
        >
          <ProductImage src={prodcutImage} />
          <Flex flexDir="column" justifyContent="center">
            <ProductTitle>{prodcutTitle}</ProductTitle>
            {/* {getVariants()} */}
          </Flex>
          <DeleteIcon onClick={deleteItem}>
            <Image src={deleteIcon} w="20px" h="20px" />
          </DeleteIcon>
        </Flex>

        <Flex w="100%" justifyContent="space-between" alignItems="center">
          <Box>
            <TableHeader>Quantity</TableHeader>
            <QuantityComponent
              plusFunction={increaseQuantity}
              minusFunction={decreaseQuantity}
              quantity={item.quantity}
            />
          </Box>
          <Box>
            <TableHeader>Cost per unity</TableHeader>
            <PriceText>{productPrice}USD</PriceText>
          </Box>

          <Box>
            <TableHeader>Total</TableHeader>
            <PriceText>{productTotalPrice}USD</PriceText>
          </Box>
        </Flex>
      </Box>

      <Box mb="32px"></Box>
    </>
  );
};

export default ItemComponent;
