/** @format */

import { create } from "apisauce";
// import { getAsyncStoredInformation_ } from "../config/appfunctions";

const apiClient = create({
  baseURL: "http://13.40.149.67:8000/api/v1/",
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
    "Content-Type": "multipart/form-data",
  },
  // timeout in mili seconds (1.5 Minute)
  timeout: 90000,
});

// getting the bearer token (to be refreshed on login)
export const updateApiSauceSettings = async (token) => {
  apiClient.setHeader("Authorization", `Bearer ${token}`);
  // const asyncValues = await getAsyncStoredInformation_();
  // if (asyncValues != null && asyncValues.token != null) {
  // }
};

export default apiClient;
