

export const putUser = (userObj: any) => {
  const token = JSON.parse(localStorage.getItem("token") || "");
  let apiObj = {
    url: `user`,
    body: { ...userObj },
    token: token,
  };
  return { ...apiObj };
};

export const getUser = () => {
  const token = JSON.parse(localStorage.getItem("token") || "");
  let apiObj = {
    url: `user`,
    token: token,
  };
  return { ...apiObj };
};



