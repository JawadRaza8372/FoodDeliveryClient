import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { w, h } from "react-native-responsiveness";
import { LinearGradient } from "expo-linear-gradient";
import {
  cardBg,
  evenlyStart,
  jusifyEnd,
  justifyStart,
} from "../DeliveryColors";

const FoodHotDeals = ({ islogo, heading }) => {
  const sub1 = "We are here with the \nbest deserts intown.";
  return (
    <View style={styles.dealViewHot}>
      <LinearGradient
        colors={["#FF9F06", "#FFE1B4"]}
        style={styles.gradientStyle}
        end={{ x: 1.2, y: 0.1 }}
      >
        <View style={styles.orderTextCont}>
          <Image
            source={
              islogo === 1
                ? require("../../assets/domino.png")
                : require("../../assets/bking.png")
            }
          />
          <Text
            style={{ color: cardBg, fontSize: h("2.2%"), fontWeight: "bold" }}
          >
            {heading}
          </Text>
          <Text style={{ color: cardBg }}>{sub1}</Text>
          <Text style={{ color: cardBg }}>Order</Text>
        </View>

        <Image
          source={
            islogo === 1
              ? require("../../assets/Pizza.png")
              : require("../../assets/burgers.png")
          }
          style={styles.mainImage}
        />
      </LinearGradient>
    </View>
  );
};

export default FoodHotDeals;

const styles = StyleSheet.create({
  dealViewHot: {
    width: w("80%"),
    height: h("22%"),
    marginHorizontal: 10,
    ...jusifyEnd,
    position: "relative",
  },
  mainImage: { position: "absolute", bottom: 0, right: w("1.2%") },
  orderTextCont: {
    width: "55%",
    height: "100%",
    ...evenlyStart,
    flexDirection: "column",
    paddingLeft: 10,
  },
  gradientStyle: {
    width: "100%",
    height: "80%",
    ...justifyStart,
    flexDirection: "row",
    borderRadius: 15,
  },
});
