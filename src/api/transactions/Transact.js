/** @format */

import apiClient from "../ApiClient";

// // get user profile
// const get_profile = () => {
//   return apiClient.get("/user/profile");
// };

// // get user wallets
// const get_wallets = () => {
//   return apiClient.get("/user/wallets");
// };

// // get user wallets
// const set_transaction_pin = (info) => {
//   var info = new FormData();
//   info.append("transaction_pin", values.transaction_pin);
//   return apiClient.post("/user/set-transaction-pin", info);
// };

// // logout
// const logout = () => {
//   return apiClient.get("/logout");
// };

// // get user transaction history
// const get_transaction_hisory = () => {
//   return apiClient.get("/user/transactions");
// };

// send money
const create_tita_voucher = (values) => {
  var info = new FormData();
  info.append("amount", values.amount);
  info.append("type", values.type);
  info.append("condition", [values.condition]);
  info.append("account_number", values.account_number);
  info.append("description", values.description);
  return apiClient.post("/voucher/create", info);
};
// send money
const transfer_to_tita_user = (values) => {
  var info = new FormData();
  info.append("account_number", values.account_number);
  info.append("amount", values.amount);
  info.append("descripttion", values.descripttion);
  return apiClient.post("/transfer/tita", info);
};

export default {
  //   logout,
  //   get_profile,
  //   get_wallets,
  //   set_transaction_pin,
  //   get_transaction_hisory,
  create_tita_voucher,
  transfer_to_tita_user,
};
