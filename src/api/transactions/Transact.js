/** @format */

import apiClient from "../ApiClient";

// send money
const transfer_to_tita_user = (values) => {
  var info = new FormData();
  info.append("account_number", values.account_number);
  info.append("amount", values.amount);
  info.append("descripttion", values.descripttion);
  return apiClient.post("/transfer/tita", info);
};

export default {
  transfer_to_tita_user,
};
