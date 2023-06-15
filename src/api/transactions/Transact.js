/** @format */

import apiClient from "../ApiClient";

// send money
const create_tita_voucher = (values) => {
  var info = new FormData();
  info.append("amount", values.amount);
  info.append("type", values.type);
  info.append("condition[0]", values.condition);
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
  transfer_to_tita_user,
  create_tita_voucher,
};
