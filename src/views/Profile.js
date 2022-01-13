import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import CustomProfileMenu from "../components/CustomProfileMenu";
import { allCenter, cardBg, screenBg } from "../DeliveryColors";
import { w, h } from "react-native-responsiveness";
import CustomProfleAccount from "../components/CustomProfleAccount";
const Profile = () => {
  return (
    <View style={styles.contianer}>
      <View style={{ width: "100%", height: "100%" }}>
        <View style={{ marginTop: h("5%") }}>
          <CustomProfleAccount
            username="M Jawad Raza"
            email="jawadraza8372@gmail.com"
          />
        </View>
        <View style={{ marginTop: h("5%") }}>
          <CustomProfileMenu
            firsticon="user-circle"
            title="Account Setting"
            secondicon="edit"
          />
        </View>

        <View style={{ marginVertical: h("5%") }}>
          <CustomProfileMenu
            firsticon="language"
            title="Language"
            secondicon="chevron-right"
          />
          <CustomProfileMenu
            firsticon="comment-dots"
            title="Feedack"
            secondicon="chevron-right"
          />
          <CustomProfileMenu
            firsticon="star"
            title="Rate us"
            secondicon="chevron-right"
          />
          <CustomProfileMenu
            firsticon="arrow-alt-circle-up"
            title="New Version"
            secondicon="chevron-right"
          />
        </View>
        <View style={styles.logoutbtn}>
          <Text style={{ fontSize: h("3%"), color: cardBg }}>Logout</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  contianer: {
    width: "100%",
    height: "100%",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: screenBg,
    ...allCenter,
  },
  logoutbtn: {
    width: w("55%"),
    height: h("7%"),
    backgroundColor: "red",
    alignSelf: "center",
    borderRadius: h("3%"),
    ...allCenter,
  },
});
