/** @format */

import apiClient from "../ApiClient";

// Login
const login = (values) => {
  var info = new FormData();
  info.append("email", values.email);
  info.append("password", values.password);
  return apiClient.post("/login", info);
};

// // Logintest
// const loginTest = (values) => {
//   var info = new FormData();
//   info.append("email", values.email);
//   info.append("password", values.password);
//   return apiClient.get("/fact", info);
// };

// ----------------------- Register User Flow -----------------------
// verify phone number
const verify_phone_number = async (values) => {
  var info = new FormData();
  info.append("phone_number", values.phone_number);
  // const response = await apiClient.post("/verify-phone-number", info);
  // response.status
  return apiClient.post("/verify-phone-number", info);
};

// verify any code sent (phone verification or password reset)
const verify_code = (values) => {
  var info = new FormData();
  info.append("phone_number", values.phone_number);
  info.append("verification_code", values.verification_code);
  return apiClient.get("/verify-code", info);
};

// Register
const register = (values) => {
  var info = new FormData();
  info.append("account_type", values.account_type);
  info.append("first_name", values.first_name);
  info.append("last_name", values.last_name);
  info.append("date_of_birth", values.date_of_birth);
  info.append("phone_number", values.phone_number);
  info.append("verification_code", values.verification_code);
  info.append("email", values.email);
  info.append("password", values.password);
  info.append("password_confirmation", values.password_confirmation);
  info.append("terms_and_conditions", values.terms_and_conditions);
  return apiClient.post("/register", info);
};

// ----------------------- Reset Password Flow -----------------------
// send password reset token
const send_reset_token = (values) => {
  var info = new FormData();
  info.append("phone_number", values.phone_number);
  return apiClient.post("/send-reset-token", info);
};

// reset password
const reset_password = (values) => {
  var info = new FormData();
  info.append("phone_number", values.phone_number);
  info.append("verification_code", values.verification_code);
  info.append("password", values.password);
  info.append("password_confirmation", values.password_confirmation);
  return apiClient.post("/reset-password", info);
};

export default {
  login,
  verify_phone_number,
  verify_code,
  register,
  send_reset_token,
  reset_password,
  // loginTest,
};
