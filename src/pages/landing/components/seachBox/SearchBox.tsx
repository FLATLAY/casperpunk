import React, { useState } from "react";

import {
  SearchBoxWrapper,
  SearchIconImg,
  SearchInput,
} from "./SearchBox-style";

/* icons */
import seachIcon from "../../../../assets/icons/search-icon.svg";

const SearchBox = ({
  value,
  setValue,
}: {
  value: string;
  setValue: (arg0: string) => void;
}) => {
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <SearchBoxWrapper>
      <SearchIconImg src={seachIcon} />
      <SearchInput value={value} onChange={changeValue} placeholder="search" />
    </SearchBoxWrapper>
  );
};

export default SearchBox;
