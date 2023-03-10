/** @format */

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";
import AppText from "../../components/AppText";
import Spacer from "../../components/Spacer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ExpandableCards from "../components/ExpandableCards";

const { width, height } = Dimensions.get("screen");

function Faqs(props) {
  const categories = ["General", "Account", "Service", "Payment"];
  const [categoryIndex, setCategoryIndex] = useState(1);

  //   const CategoriesList = ({ navigation }) => {
  //     return (
  //       <View style={styles.categoriescontainer}>
  //         {categories.map((item, index) => (
  //           <TouchableOpacity
  //             activeOpacity={0.08}
  //             key={index}
  //             onPress={() => setCategoryIndex(index)}
  //           >
  //             <Text
  //               style={[
  //                 styles.categoryText,
  //                 categoryIndex == index && styles.categoryselected,
  //               ]}
  //             >
  //               {item}
  //             </Text>
  //           </TouchableOpacity>
  //         ))}
  //       </View>
  //     );
  //   };

  return (
    <View style={styles.container}>
      {/* <Text>grequesntly asjed question</Text> */}
      <Spacer height={15} />
      {/* <CategoriesList /> */}
      <View style={styles.searchBox}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Spacer width={5} />
          <MaterialCommunityIcons name="magnify" size={20} color={"#8e8e93"} />
          <Spacer width={5} />
          <TextInput placeholder="Search" style={{ width: width * 0.6 }} />
        </View>
      </View>
      <Spacer height={10} />
      <ExpandableCards cardTitle={"What is TITA"} />
      <ExpandableCards cardTitle={"How do i send money"} />
      <ExpandableCards cardTitle={"How do i exit the app"} />
      <ExpandableCards cardTitle={"Can i delete my account"} />
      <ExpandableCards cardTitle={"How do i purchase a voucher"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  categoryText: {
    color: "grey",
    fontWeight: "bold",
  },
  categoriescontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoryselected: {
    color: "white",
    fontWeight: "bold",
    paddingBottom: 5,
    borderColor: "#3862F8",
    backgroundColor: "blue",
    borderRadius: 10,
    width: width * 0.15,
    // borderBottomWidth: 2,
  },
  searchBox: {
    width: width * 0.85,
    backgroundColor: "#7676801F",
    height: 50,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Faqs;
