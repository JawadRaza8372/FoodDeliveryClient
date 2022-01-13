import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { w, h } from "react-native-responsiveness";
import {
  mainColor,
  cardBg,
  mainColorLite,
  justifyStart,
  justifyBetween,
  aroundStart,
  allCenter,
} from "../DeliveryColors";
import { Entypo, FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const HotelDetailsCard = ({ onPressLocation }) => {
  const onClicklocation = () => {
    onPressLocation();
  };
  return (
    <View style={styles.hotleDetlCrd}>
      <Text style={{ fontSize: h("3.2%"), marginLeft: 10 }}>Hotel Name</Text>
      <View style={styles.hotlLoctViewD}>
        <Entypo name="location-pin" size={h("3.6%")} color={mainColor} />
        <Text style={{ marginLeft: 15, fontSize: h("2.5%") }}>Location</Text>
      </View>
      <View style={styles.hotlimagview}>
        <Image
          source={require("../../assets/resturant.png")}
          style={styles.hotleImag}
        />
      </View>

      <View style={styles.hotleInfoView}>
        <View style={styles.hotleTimingView}>
          <View style={styles.hotleTimg}>
            <Entypo name="pie-chart" size={h("3.6%")} color={mainColor} />
            <Text style={{ marginLeft: 10, fontSize: h("3%") }}>Timing</Text>
          </View>
          <Text style={{ fontSize: h("2.3%") }}>10:00 AM - 12:00 PM</Text>
        </View>
        <View style={styles.locationButtonView}>
          <TouchableOpacity
            style={styles.locationBtn}
            onPress={onClicklocation}
          >
            <FontAwesome5 name="directions" size={h("3%")} color="#2C8DFF" />
            <Text
              style={{ color: "#2C8DFF", marginLeft: 5, fontSize: h("2.2%") }}
            >
              Visit Resturant
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HotelDetailsCard;

const styles = StyleSheet.create({
  hotleDetlCrd: {
    width: w("97%"),
    height: h("52%"),
    alignSelf: "center",
    overflow: "hidden",
    backgroundColor: cardBg,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  hotlLoctViewD: {
    width: "100%",
    overflow: "hidden",
    ...justifyStart,
    flexDirection: "row",
    marginVertical: 10,
  },
  hotlimagview: {
    width: "100%",
    height: "55%",
    borderRadius: 25,
    overflow: "hidden",
  },
  hotleImag: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    alignSelf: "center",
  },
  hotleInfoView: {
    width: "100%",
    height: "20%",
    ...justifyBetween,
    flexDirection: "row",
  },
  hotleTimingView: {
    width: "60%",
    height: "100%",
    ...aroundStart,
    flexDirection: "column",
    paddingLeft: 10,
  },
  hotleTimg: {
    width: "100%",
    height: "50%",
    ...justifyStart,
    flexDirection: "row",
  },
  locationButtonView: { width: "40%", height: "100%" },
  locationBtn: {
    height: "100%",
    width: "100%",
    ...allCenter,
    flexDirection: "row",
  },
});
