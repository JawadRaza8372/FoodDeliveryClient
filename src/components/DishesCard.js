import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { w, h } from "react-native-responsiveness";
import {
  alignStart,
  allCenter,
  cardBg,
  mainColor,
  justifyEvenly,
} from "../DeliveryColors";
import { Entypo } from "@expo/vector-icons";

const DishesCard = () => {
  return (
    <View style={styles.cardView}>
      <View style={styles.imagContView}>
        <Image
          source={require("../../assets/Pizza.png")}
          style={styles.imageshw}
        />
      </View>
      <View style={styles.txtDiviView}>
        <View style={styles.dishContName}>
          <Text style={{ fontSize: h("2%"), width: "100%", height: "100%" }}>
            Dish name
          </Text>
        </View>
        <View style={styles.dishlocView}>
          <View style={styles.iconView}>
            <Entypo name="location-pin" size={h("3%")} color={mainColor} />
          </View>
          <View style={styles.locaView}>
            <Text style={{ fontSize: h("1.7%") }}>Location</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishesCard;

const styles = StyleSheet.create({
  cardView: {
    width: w("36%"),
    height: h("26%"),
    backgroundColor: cardBg,
    overflow: "hidden",
    borderRadius: 10,
    ...justifyEvenly,
    flexDirection: "column",
    marginVertical: 5,
    marginRight: 10,
  },
  imagContView: {
    width: w("34%"),
    height: h("15%"),
    borderRadius: 15,
    alignSelf: "center",
  },
  imageshw: { width: "100%", height: "100%", resizeMode: "cover" },
  txtDiviView: {
    width: w("34%"),
    height: h("10%"),
    alignSelf: "center",
  },
  dishContName: {
    height: "40%",
    width: "96%",
    ...alignStart,
    overflow: "hidden",
    alignSelf: "center",
  },
  dishlocView: {
    height: "60%",
    width: "100%",
    ...allCenter,
    flexDirection: "row",
  },
  iconView: {
    height: "100%",
    width: "20%",
    ...allCenter,
  },
  locaView: {
    width: "80%",
    height: "100%",
    overflow: "hidden",
    ...alignStart,
  },
});
