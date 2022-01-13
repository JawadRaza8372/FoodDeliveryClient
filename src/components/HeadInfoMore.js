import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { w, h } from "react-native-responsiveness";
import { FontAwesome5 } from "@expo/vector-icons";
import { allCenter, evenlyStart, greyText } from "../DeliveryColors";
const HeadInfoMore = ({ heading, subheading }) => {
  return (
    <View style={styles.infoHeadView}>
      <View style={styles.infotxtCont}>
        <Text style={{ fontSize: h("2.5%") }}>{heading}</Text>
        <Text style={{ fontSize: h("1.8%"), color: greyText }}>
          {subheading}
        </Text>
      </View>
      <View style={styles.viewMoreCont}>
        <Text style={{ marginRight: 5, color: greyText }}>See All</Text>
        <FontAwesome5 name="chevron-right" size={h("2.5%")} color={greyText} />
      </View>
    </View>
  );
};

export default HeadInfoMore;

const styles = StyleSheet.create({
  infoHeadView: {
    width: w("95%"),
    alignSelf: "center",
    height: h("10%"),
    marginVertical: 5,
    ...allCenter,
    flexDirection: "row",
  },
  infotxtCont: {
    width: "80%",
    height: "100%",
    ...evenlyStart,
    flexDirection: "column",
    paddingLeft: 5,
  },
  viewMoreCont: {
    width: "20%",
    height: "100%",
    ...allCenter,
    flexDirection: "row",
  },
});
