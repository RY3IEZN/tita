import apiClient from "../ApiClient";

// get user profile
const get_profile = () => {
  return apiClient.get("/user/profile");
};

// get user wallets
const get_wallets = () => {
  return apiClient.get("/user/wallets");
};

// get user wallets
const set_transaction_pin = (info) => {
  var info = new FormData();
  info.append("transaction_pin", values.transaction_pin);
  return apiClient.post("/user/set-transaction-pin", info);
};

// logout
const logout = () => {
  return apiClient.get("/logout");
};

export default { logout, get_profile, get_wallets, set_transaction_pin };
