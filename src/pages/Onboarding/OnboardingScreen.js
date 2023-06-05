/** @format */
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";
import Splashscreen1 from "../../../assets/svg/Splashscreen1";
import Onboarding2 from "../../../assets/svg/Onboarding2";
import Onboarding3 from "../../../assets/svg/Onboarding3";
import Getstarted from "../../../assets/svg/Getstarted";
import AppText from "../components/AppText";

const { width, height } = Dimensions.get("screen");

const slides = [
  {
    image: <Splashscreen1 />,
    title: "Send Money",
    description:
      "Send money to all networks and banks with assured security right from where you are.",
  },
  {
    image: <Onboarding2 />,
    title: "Pay Bills",
    description:
      "Pay bills such as Electricity, Water bill, TV subscriptions, etc. Buy airtime & Bundles.",
  },
  {
    image: <Onboarding3 />,
    title: "Great Experience",
    description:
      "Great Experience with our Fintech App. We are here to satisfy you in all possible ways.",
  },
];

function OnboardingScreen({ navigation }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSwiperIndexChanged = (index) => {
    setActiveIndex(index);
  };

  const renderSlides = () => {
    return slides.map((slide, index) => (
      <View key={index} style={styles.slide}>
        {slide.image}
        <Text style={styles.title}>{slide.title}</Text>
        <Text style={styles.description}>{slide.description}</Text>
        {index === 2 && (
          <TouchableOpacity
            onPress={() => navigation.navigate("welcomepage")}
            style={styles.getStartedButton}
          >
            <Getstarted />
            <View style={styles.startTextContainer}>
              <AppText
                theText="Start"
                color="white"
                fontSize={20}
                fontWeight="700"
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        loop={false}
        index={0}
        onIndexChanged={handleSwiperIndexChanged}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        paginationStyle={styles.paginationStyle} //
      >
        {renderSlides()}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  paginationStyle: {
    bottom: height * 0.25, // Adjust the value as needed
    right: 300, // Adjust the value as needed
    alignItems: "flex-start",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  wrapper: {},
  slide: {
    flex: 1,
    alignItems: "center",
    marginTop: 210,
  },
  title: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 22,
    marginTop: 50,
  },
  description: {
    color: "#000000",
    fontSize: 15,
    fontWeight: "300",
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 17,
  },
  dot: {
    backgroundColor: "#c4c4c4",
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDot: {
    backgroundColor: "#4361ee",
    width: 8,
    height: 8,
    borderRadius: 6,
    margin: 3,
  },
  getStartedButton: {
    position: "absolute",
    bottom: 0,
    right: -10,
  },
  startTextContainer: {
    position: "absolute",
    bottom: 30,
    right: 30,
  },
});

export default OnboardingScreen;
