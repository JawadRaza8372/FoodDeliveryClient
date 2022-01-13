import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import CustomAuthButton from "./CustomAuthButton";
import { w, h } from "react-native-responsiveness";
import { Entypo } from "@expo/vector-icons";
import { alignStart, allCenter, cardBg, mainColor } from "../DeliveryColors";
const BookingCard = ({ onCheck }) => {
  return (
    <View style={styles.bookingCardView}>
      <View style={styles.imgContainer}>
        <ImageBackground
          source={require("../../assets/Pizza.png")}
          resizeMode="cover"
          style={styles.myimgshow}
        />
      </View>
      <View style={styles.mainContain}>
        <Text style={{ fontSize: h("3%") }}>Hotel Name</Text>
        <View style={styles.subContain}>
          <View style={styles.firstchildcontain}>
            <View style={styles.miniDivCont}>
              <Entypo name="location-pin" size={h("4%")} color={mainColor} />
            </View>
            <View style={styles.miniDivContS}>
              <Text style={{ fontSize: h("2%") }}>Location</Text>
            </View>
          </View>
          <View style={styles.buttonContain}>
            <CustomAuthButton
              title="Check"
              txtColor={cardBg}
              bgColor={mainColor}
              onPressFun={() => {
                onCheck();
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default BookingCard;

const styles = StyleSheet.create({
  bookingCardView: {
    width: w("96%"),
    height: h("15%"),
    backgroundColor: cardBg,
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
    overflow: "hidden",
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
  imgContainer: {
    width: "30%",
    height: "100%",
    ...allCenter,
    overflow: "hidden",
    borderRadius: 15,
  },
  myimgshow: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  mainContain: {
    width: "70%",
    height: "100%",
    ...alignStart,
    flexDirection: "column",
    overflow: "hidden",
  },
  subContain: {
    width: "95%",
    height: "40%",
    ...allCenter,
    flexDirection: "row",
  },
  firstchildcontain: {
    height: "100%",
    width: "60%",
    ...allCenter,
    flexDirection: "row",
  },
  miniDivCont: {
    height: "100%",
    width: "20%",
    ...allCenter,
  },
  miniDivContS: {
    width: "80%",
    height: "100%",
    overflow: "hidden",
    ...alignStart,
  },
  buttonContain: { height: "100%", width: "40%" },
});
