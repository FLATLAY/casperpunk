export const getAddressBooks = () => {
  const token = JSON.parse(localStorage.getItem("token") || "");
  let apiObj = {
    url: `address-book`,
    token: token,
    body: null,
  };
  return { ...apiObj };
};

export const postAddressBook = (addressObj: any) => {
  const token = JSON.parse(localStorage.getItem("token") || "");
  let apiObj = {
    url: `address-book`,
    token: token,
    body: addressObj,
  };
  return { ...apiObj };
};

export const getAddressBookById = (addressId:string) => {
  const token = JSON.parse(localStorage.getItem("token") || "");
  let apiObj = {
    url: `address-book/${addressId}`,
    token: token,
    body: null,
  };
  return { ...apiObj };
};
