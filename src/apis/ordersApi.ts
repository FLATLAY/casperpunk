


export const postOrderPaymentCasper = (deployHash:string , orderID:string) => {
    const token = JSON.parse(localStorage.getItem("token") || "");
    let apiObj = {
      url: `order/payment/casper`,
      body: {
        
            "deploy_hash": deployHash,
            "orderID": orderID
          
      },
      token: token,
    };
    return { ...apiObj };
  };
  