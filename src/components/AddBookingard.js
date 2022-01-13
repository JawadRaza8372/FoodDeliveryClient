import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { w, h } from "react-native-responsiveness";
import { Ionicons } from "@expo/vector-icons";
import { cardBg, greyText, allCenter } from "../DeliveryColors";
const AddBookingard = () => {
  return (
    <View style={styles.bookCard}>
      <Ionicons name="add-sharp" size={h("4%")} color={greyText} />
      <Text style={styles.infoText}>Book More</Text>
    </View>
  );
};

export default AddBookingard;

const styles = StyleSheet.create({
  bookCard: {
    width: w("55%"),
    height: h("7%"),
    alignSelf: "center",
    backgroundColor: cardBg,
    ...allCenter,
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
    elevation: 5,
  },
  infoText: { fontSize: h("2.5%"), color: greyText },
});
