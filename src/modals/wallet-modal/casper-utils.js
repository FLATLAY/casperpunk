import { CLPublicKey } from "casper-js-sdk";
export const auth_err = {
  cancelled_signing: Symbol("User Cancelled Signing"),
  casper_signer_not_found: Symbol("Casper Signer not found"),
  general_error: Symbol("general error"),
};
/**
 *
 * @param {string} publicKey
 * @returns ({'publicKey' : string , 'account_hash' : string , 'signature' : string})
 */
let get_account_information = async function (publicKey) {
  let sign = await window.casperlabsHelper.signMessage(
    "Please sign this message to let droplinked access to your PublicKey and validate your identity.",
    await window.casperlabsHelper.getActivePublicKey()
  );
  return {
    publicKey: publicKey,
    account_hash: CLPublicKey.fromHex(publicKey).toAccountRawHashStr(),
    signature: sign,
  };
};

/**
 *
 * @param {({'publicKey' : string , 'account_hash' : string , 'signature' : string})=>{}} on_connected
 * @param {*} on_activeKeyChanged
 * @param {(error_type:auth_err)=>{}} on_err
 * @throws "Casper-Signer not found!" if the casper signer is not installed on user's browser
 */
export const casper_login = function (
  on_connected = null,
  on_err = null,
  on_activeKeyChanged = null
) {
  let called = false;
  if (window.casperlabsHelper == undefined) {
    if (on_err != null && !called) {
      called = true;
      on_err(auth_err.casper_signer_not_found);
    }
    return;
  }
  window.casperlabsHelper
    .isConnected()
    .then((value) => {
      if (value) {
        window.casperlabsHelper
          .getActivePublicKey()
          .then((publicKey) => {
            get_account_information(publicKey)
              .then((acc_info) => {
                if (!called) {
                  called = true;
                  on_connected(acc_info);
                }
              })
              .catch((reason) => {
                console.log("err 1: ", reason);
                if (on_err != null && !called) {
                  called = true;
                  on_err(auth_err.cancelled_signing);
                }
              });
          })
          .catch((reason) => {
            console.log("error 2: ", reason);
          });
      }
    })
    .catch((reason) => {
      console.log("error 3: ", reason);
    });
  window.casperlabsHelper.requestConnection();
  window.addEventListener("signer:connected", (msg) => {
    if (on_connected != null) {
      get_account_information(String(msg.detail.activeKey))
        .then((value) => {
          if (!called) {
            called = true;
            on_connected(value);
          }
        })
        .catch((error) => {
          console.log("error 4: ", error);
        });
    }
  });
  window.addEventListener("signer:activeKeyChanged", (msg) => {
    if (on_activeKeyChanged != null) {
      get_account_information(String(msg.detail.activeKey))
        .then((value) => {
          on_activeKeyChanged(value);
        })
        .catch((error) => {
          console.log("error 5: ", error);
        });
    }
  });
  window.addEventListener("signer:unlocked", (msg) => {
    if (on_connected != null) {
      get_account_information(String(msg.detail.activeKey))
        .then((value) => {
          if (!called) {
            called = true;
            on_connected(value);
          }
        })
        .catch((error) => {
          console.log("error 6:", error);
        });
    }
  });
};
