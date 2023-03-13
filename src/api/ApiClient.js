import { create } from "apisauce";
import { getAsyncStoredInformation_ } from "../config/appfunctions";

const apiClient = create({
  baseURL: "https://titafinancebackend.com/api/v1",
  headers: {
    // "Content-Type": "application/json",
    "Content-Type": "multipart/form-data",
  },
  // timeout in mili seconds (1.5 Minute)
  timeout: 90000,
});

// getting the bearer token (to be refreshed on login)
export const updateApiSauceSettings = async () => {
  const asyncValues = await getAsyncStoredInformation_();
  if (asyncValues != null && asyncValues.token != null) {
    apiClient.setHeader("Authorization", `Bearer ${asyncValues.token}`);
  }
};

export default apiClient;
