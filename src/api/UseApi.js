/** @format */

import { useState } from "react";
import { Alert } from "react-native";

export default useApi = (apiFunction, noErrorEffect = false) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [statusCode, setStatusCode] = useState(null);

  const makeRequest = async (...args) => {
    // making api function call
    setLoading(true);
    const response = await apiFunction(...args);
    setLoading(false);
    // show the status
    setStatusCode(response.status);

    // when successful
    if (response.ok) {
      setError(false);
      console.log(response.data);
      setData(response.data);
    }

    // if no ErrorEffect (means, no popups if an error occures)
    if (noErrorEffect == true) {
      setData({ message: "An error occured" });
      return setError(true);
    }

    // when there is an error
    if (!response.ok) {
      if (response.problem == "NETWORK_ERROR") {
        Alert.alert(
          "Network Error",
          "Check your network connection and retry action"
        );
      } else if (response.problem == "CONNECTION_ERROR") {
        Alert.alert(
          "Connection Error",
          "Unable to reach the server at this moment. Please retry action"
        );
      } else if (response.problem == "TIMEOUT_ERROR") {
        Alert.alert(
          "Connection Timeout",
          "The server is taking too long to respond. Please try again in few minutes"
        );
      } else if (response.problem == "SERVER_ERROR") {
        Alert.alert(
          "Connection Error",
          "An error occured while processing request."
        );

        // getting server error message
        // console.log(response.originalError);
        // console.log(response.originalError.message);
        console.log(response.originalError.response);
      } else if (response.problem == "CLIENT_ERROR") {
        // if (response.status === 401) {
        //   // **redirect to login page**
        //   Alert.alert(
        //     "Session Expired",
        //     "Current session has expired, please login again"
        //   );
        // }
        setData(response.data);
        return setError(false);
      }
      return setError(true);
    }
  };

  return { data, error, loading, makeRequest, statusCode };
};
