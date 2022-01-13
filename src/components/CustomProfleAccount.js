import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { w, h } from "react-native-responsiveness";
import {
  allCenter,
  cardBg,
  evenlyStart,
  greyText,
  justifyBetween,
  screenBg,
} from "../DeliveryColors";
import { FontAwesome5 } from "@expo/vector-icons";

const CustomProfleAccount = ({ username, email, profileImg }) => {
  const userimg = profileImg ? profileImg : "https://picsum.photos/200/300";
  return (
    <View style={styles.profilepicmenu}>
      <View style={styles.ppContain}>
        <Image source={{ uri: `${userimg}` }} style={styles.imageshow} />
      </View>
      <View style={styles.ppContainsec}>
        <View style={styles.ppTextContin}>
          <Text style={{ fontSize: h("2.5%") }}>{username}</Text>
          <Text style={{ fontSize: h("1.9%"), color: greyText }}>{email}</Text>
        </View>
        <View style={styles.bellContin}>
          <FontAwesome5 name="bell" size={24} color="black" />
          <View style={styles.notifyDiv} />
        </View>
      </View>
    </View>
  );
};

export default CustomProfleAccount;

const styles = StyleSheet.create({
  profilepicmenu: {
    width: "95%",
    height: h("9%"),
    backgroundColor: cardBg,
    alignSelf: "center",
    borderRadius: 15,
    ...allCenter,
    flexDirection: "row",
    overflow: "hidden",
  },
  ppContain: {
    width: "20%",
    height: "100%",
    ...allCenter,
    borderRadius: w("50%"),
    backgroundColor: screenBg,
    overflow: "hidden",
  },
  imageshow: { width: "100%", height: "100%", resizeMode: "cover" },
  ppContainsec: {
    width: "80%",
    height: "100%",
    ...justifyBetween,
    flexDirection: "row",
    paddingRight: 15,
  },
  ppTextContin: {
    width: "80%",
    height: "100%",
    ...evenlyStart,
    flexDirection: "column",
    paddingLeft: 15,
  },
  bellContin: {
    width: "20%",
    height: "80%",
    backgroundColor: screenBg,
    borderRadius: w("50%"),
    ...allCenter,
    position: "relative",
  },
  notifyDiv: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "red",
    position: "absolute",
    top: 0,
    right: 10,
  },
});
