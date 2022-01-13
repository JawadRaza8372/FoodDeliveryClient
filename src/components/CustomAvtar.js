import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { w, h } from "react-native-responsiveness";
import { screenBg, allCenter } from "../DeliveryColors";
const CustomAvtar = () => {
  return (
    <View style={styles.avtarView}>
      <Image
        source={{ uri: "https://picsum.photos/200/300" }}
        style={styles.imgView}
      />
    </View>
  );
};

export default CustomAvtar;

const styles = StyleSheet.create({
  avtarView: {
    width: h("7%"),
    height: h("7%"),
    ...allCenter,
    borderRadius: h("9%"),
    backgroundColor: screenBg,
    overflow: "hidden",
  },
  imgView: { width: "100%", height: "100%", resizeMode: "cover" },
});
