import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { allCenter, cardBg, mainColor } from "../DeliveryColors";
import { h } from "react-native-responsiveness";
import BookingCard from "../components/BookingCard";
import AddBookingard from "../components/AddBookingard";

const BookingScreen = ({ navigation }) => {
  return (
    <View style={styles.bookingScreenView}>
      <View style={styles.greenBookingHeader}>
        <Text style={{ fontSize: h("3%"), color: cardBg, fontWeight: "bold" }}>
          Booking Details
        </Text>
      </View>
      <View style={styles.bookingBodyView}>
        <ScrollView contentContainerStyle={{ paddingVertical: 10 }}>
          <BookingCard onCheck={() => navigation.navigate("details")} />
          <BookingCard onCheck={() => navigation.navigate("details")} />
          <BookingCard onCheck={() => navigation.navigate("details")} />
          <BookingCard onCheck={() => navigation.navigate("details")} />

          <AddBookingard />
        </ScrollView>
      </View>
    </View>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  bookingScreenView: { width: "100%", height: "100%", backgroundColor: cardBg },
  greenBookingHeader: {
    width: "100%",
    height: "15%",
    backgroundColor: mainColor,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    ...allCenter,
    paddingTop: StatusBar.currentHeight,
  },
  bookingBodyView: { width: "100%", height: "85%" },
});
