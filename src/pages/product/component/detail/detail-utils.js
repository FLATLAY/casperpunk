import { IMS_TYPES } from "../../../../constant/ims-types";

export const getOptions = (product) => {
  let optionsArray = [];
  // get option list of droplinked
  if (product.type == IMS_TYPES.DROPLINKED) {
    // get options type
    product.skuIDs[0].options.forEach((option) => {
      optionsArray.push({
        variantName:
          option.variantID == "62a989ab1f2c2bbc5b1e7153" ? "Color" : "Size",
        variantID: option.variantID,
        values: [],
      });
    });
    // find values of each option type
    if (optionsArray.length > 0) {
      optionsArray.forEach((option) => {
        let values = [];
        product.skuIDs.forEach((sku) => {
          let findOptionValue = sku.options.find(
            (opt) => opt.variantID == option.variantID
          ).value;
          if (!values.includes(findOptionValue)) values.push(findOptionValue);
        });
        option.values = values;
      });
    }
  } else {
    // get option list of shopifys
    product.shopifyData.options.forEach((option) => {
      if (option.name == "Size" || option.name == "Color")
        optionsArray.push({
          values: option.values,
          variantID: option.id,
          variantName: option.name,
        });
    });
  }

  return optionsArray;
};

export const getSelectedSku = (product, selectedSku, variantId, value) => {
  let newSku = null;

  if (product.type == IMS_TYPES.DROPLINKED) {
    // get new option
    let selectedOption = selectedSku.options.map((option) => {
      if (option.variantID == variantId) {
        return { ...option, value: value };
      } else {
        return { ...option };
      }
    });
    // find currect sku
    product.skuIDs.forEach((sku) => {
      let find = true;

      sku.options.forEach((opt) => {
        let findOpt = selectedOption.find(
          (element) => element.variantID == opt.variantID
        );
        if (findOpt.value != opt.value) find = false;
      });

      if (find) {
        newSku = sku;
        return;
      }
    });
  } else {
    let selectedOption = selectedSku.option_values.map((option) => {
      if (option.option_id == variantId) {
        return { ...option, value: value };
      } else {
        return { ...option };
      }
    });

    // find currect sku
    product.shopifyData.variants.forEach((sku) => {
      let find = true;

      sku.option_values.forEach((opt) => {
        let findOpt = selectedOption.find(
          (element) => element.option_id == opt.option_id
        );
        if (findOpt.value != opt.value) find = false;
      });

      if (find) {
        newSku = sku;
        return;
      }
    });
  }

  // product.skuIDs

  return newSku;
};

export const getFirstSku = (product) =>
  product.type == IMS_TYPES.DROPLINKED
    ? product.skuIDs[0]
    : product.shopifyData.variants[0];

export const getPrice = (imsType, selectedSku) => {
  if (imsType == IMS_TYPES.DROPLINKED) {
    return selectedSku != null ? `$${selectedSku.price.toFixed(2)}` : "-";
  } else {
    return `$${selectedSku.price}`;
  }
};

export const getProductTitle = (product) =>
  product.type == IMS_TYPES.DROPLINKED
    ? product.title
    : product.shopifyData.title;

// export const isSelectedOption = (product) => {

//   if (product.type == IMS_TYPES.DROPLINKED) {}

// };
