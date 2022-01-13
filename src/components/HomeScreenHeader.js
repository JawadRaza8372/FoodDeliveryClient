import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";
import { w, h } from "react-native-responsiveness";
import {
  alignStart,
  allCenter,
  cardBg,
  mainColor,
  screenBg,
  justifyBetween,
  greyText,
} from "../DeliveryColors";
import CustomAvtar from "./CustomAvtar";
import HomeScreenHeaderProfilePic from "./HomeScreenHeaderProfilePic";
const HomeScreenHeader = () => {
  return (
    <>
      <HomeScreenHeaderProfilePic
        icon="list"
        onClickfun={() => console.log("list")}
      />
      <View style={styles.searchInpCont}>
        <View style={styles.srchInpView}>
          <View style={styles.srchInpIcon}>
            <Feather name="search" size={h("4%")} color={greyText} />
          </View>
          <View style={styles.srchInpViw}>
            <TextInput
              placeholder="search"
              placeholderTextColor={greyText}
              style={styles.inputfieldSearch}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default HomeScreenHeader;

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
  searchInpCont: {
    width: "95%",
    height: "50%",
    ...allCenter,
    alignSelf: "center",
    overflow: "hidden",
  },
  srchInpView: {
    width: "80%",
    height: "70%",
    backgroundColor: screenBg,
    borderRadius: 15,
    ...allCenter,
    flexDirection: "row",
    overflow: "hidden",
    paddingRight: 10,
  },
  srchInpIcon: {
    width: "20%",
    height: "100%",
    ...allCenter,
  },
  srchInpViw: { width: "80%", height: "100%" },
  inputfieldSearch: { width: "100%", height: "100%", fontSize: h("2.5%") },
});
