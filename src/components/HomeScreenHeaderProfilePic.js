import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { w, h } from "react-native-responsiveness";
import {
  alignStart,
  allCenter,
  mainColor,
  justifyBetween,
  greyText,
  cardBg,
} from "../DeliveryColors";
import CustomAvtar from "./CustomAvtar";
const HomeScreenHeaderProfilePic = ({ maps, icon, onClickfun }) => {
  const onPressFun = () => {
    onClickfun();
  };
  return (
    <View style={{ ...styles.homehdView, height: maps ? "100%" : "50%" }}>
      <TouchableOpacity style={styles.iconViewhd} onPress={onPressFun}>
        <Entypo
          name={`${icon}`}
          size={h("5%")}
          color={maps ? cardBg : greyText}
        />
      </TouchableOpacity>
      <View style={styles.locatViewhd}>
        <View style={styles.locatIcon}>
          <Entypo
            name="location-pin"
            size={h("3%")}
            color={maps ? cardBg : mainColor}
          />
        </View>
        <View style={styles.locatText}>
          <Text
            style={{
              fontSize: h("2%"),
              textAlign: "center",
              color: maps ? cardBg : greyText,
              fontWeight: "800",
            }}
          >
            Punjab, Pakistan
          </Text>
        </View>
      </View>
      <CustomAvtar />
    </View>
  );
};

export default HomeScreenHeaderProfilePic;

const styles = StyleSheet.create({
  homehdView: {
    width: "95%",
    height: "50%",
    ...justifyBetween,
    flexDirection: "row",
    alignSelf: "center",
  },
  iconViewhd: {
    width: "20%",
    height: "100%",
    ...allCenter,
  },
  locatViewhd: {
    width: "50%",
    height: "100%",
    ...allCenter,
    flexDirection: "row",
  },
  locatIcon: {
    width: "20%",
    height: "100%",
    ...allCenter,
  },
  locatText: {
    width: "80%",
    height: "100%",
    overflow: "hidden",
    ...alignStart,
  },
});
