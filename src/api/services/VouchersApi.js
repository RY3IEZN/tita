import apiClient from "../ApiClient";

// create voucher
const create_voucher = (values) => {
  var info = new FormData();
  info.append("amount", values.amount);
  info.append("type", "program");
  info.append("description", values.description);
  info.append("transaction_pin", values.transaction_pin);
  if (values.loading_date) {
    info.append("loading_date", values.loading_date);
    info.append("condition", "loading_date");
  }
  if (values.beneficiary_account_number) {
    info.append(
      "beneficiary_account_number",
      values.beneficiary_account_number
    );
    info.append("condition", "beneficiary");
  }
  if (values.request_confirmation) {
    info.append("condition", "request_confirmation");
  }

  return apiClient.post("/voucher/create", info);
};

// verify voucher
const verify_voucher = (values) => {
  var info = new FormData();
  info.append("voucher_code", values.voucher_code);
  info.append("voucher_pin", values.voucher_pin);
  return apiClient.post("/voucher/verify", info);
};

// claim voucher
const claim_voucher = (values) => {
  var info = new FormData();
  info.append("voucher_code", values.voucher_code);
  info.append("voucher_pin", values.voucher_pin);
  info.append("transaction_pin", values.transaction_pin);
  return apiClient.post("/voucher/claim", info);
};

export default { create_voucher, verify_voucher, claim_voucher };
