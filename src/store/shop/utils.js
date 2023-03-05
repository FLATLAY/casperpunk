const getPrimaryColor = (shopName) => {
  switch (shopName) {
    case shopName == "testcasperpunk":
      return "#161f2f";
    case shopName == "testunstoppable":
      return "#edeff1";
    default:
      return "#D8D3C5";
  }
};

const getSecondryColor = (shopName) => {
  switch (shopName) {
    case shopName == "testcasperpunk":
      return "#ffffff";
    default:
      return "#262626";
  }
};
