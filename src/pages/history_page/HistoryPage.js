/** @format */

import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import AppContainerView from "../components/AppContainerView";
import Spacer from "../components/Spacer";
import { useState } from "react";
import Header from "../components/Header";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { Dimensions } from "react-native";
import ProfileApi from "../../api/user/ProfileApi";
import UseApi from "../../api/UseApi";
import IncomingTransactions from "./pages/IncomingTransactions";
import OutgoingTransactions from "./pages/OutgoingTransactions";
import AllTransactions from "./pages/AllTransactions";
import { ActivityIndicator } from "react-native-paper";

const { width, height } = Dimensions.get("screen");

function HistoryPage(props) {
  const categories = ["All", "Recieved", "Sent"];
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [transactionDetails, setTransactionDetails] = useState();

  const getTransactionDetailsApi = UseApi(ProfileApi.get_transaction_hisory);

  useEffect(() => {
    getTransactionDetailsApi.makeRequest();
  }, []);

  useEffect(() => {
    if (getTransactionDetailsApi.data && getTransactionDetailsApi.statusCode) {
      setTransactionDetails(getTransactionDetailsApi.data);
    }
  }, [getTransactionDetailsApi.data, transactionDetails]);

  const CategoriesList = ({ navigation }) => {
    return (
      <View style={styles.categoriescontainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.08}
            key={index}
            onPress={() => setCategoryIndex(index)}
          >
            <Text
              style={[
                styles.categoryText,
                categoryIndex == index && styles.categoryselected,
                categoryIndex != index && styles.categoryUnselected,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const deposits = transactionDetails
    ? transactionDetails.filter((transaction) => transaction.type === "deposit")
    : [];

  const withdraw = transactionDetails
    ? transactionDetails.filter(
        (transaction) => transaction.type === "withdraw"
      )
    : [];

  const allDetails = transactionDetails ? [...transactionDetails] : [];

  return (
    <AppContainerView>
      <Header headerTitle={"History"} />
      <Spacer height={20} />
      <CategoriesList />

      {categoryIndex == 0 ? (
        <AllTransactions transactionDetails={allDetails} />
      ) : (
        ""
      )}
      {categoryIndex == 1 ? (
        <IncomingTransactions transactionDetails={deposits} />
      ) : (
        ""
      )}
      {categoryIndex == 2 ? (
        <OutgoingTransactions transactionDetails={withdraw} />
      ) : (
        ""
      )}
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
  categoryText: {
    color: "grey",
    fontWeight: "bold",
    textAlign: "center",
  },
  categoriescontainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  categoryselected: {
    color: "#3862F8",
    fontWeight: "bold",
    borderBottomWidth: 5,
    width: width * 0.3,
    paddingBottom: 5,
    borderColor: "#3862F8",
    alignItems: "center",
    justifyContent: "center",
  },
  categoryUnselected: {
    color: "grey",
    fontWeight: "bold",
    borderBottomWidth: 2,
    width: width * 0.3,
    paddingBottom: 5,
    borderColor: "#ebebeb",
  },
});

export default HistoryPage;
