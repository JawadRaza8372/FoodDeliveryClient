import React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { screenBg, cardBg, mainColor, allCenter } from "../DeliveryColors";
import { w, h } from "react-native-responsiveness";
import { AntDesign } from "@expo/vector-icons";
import CustomAuthButton from "../components/CustomAuthButton";
import BookingCard from "../components/BookingCard";
import HeadInfoMore from "../components/HeadInfoMore";
import HotelDetailsCard from "../components/HotelDetailsCard";

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.detailsScreenView}>
      <View style={styles.greenHeader}>
        <Text style={{ fontSize: h("3%"), color: cardBg, fontWeight: "bold" }}>
          Resturant Details
        </Text>
        <TouchableOpacity
          style={styles.backButtonView}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={h("4%")} color={cardBg} />
        </TouchableOpacity>
      </View>
      <View style={styles.bodyContentView}>
        <ScrollView
          contentContainerStyle={{
            width: "100%",
            paddingVertical: 15,
          }}
        >
          <HotelDetailsCard
            onPressLocation={() => {
              navigation.navigate("hotlCordinat");
            }}
          />
          <HeadInfoMore
            heading="List of Resturants"
            subheading="Check out some other resturants."
          />
          <BookingCard onCheck={() => navigation.navigate("details")} />
          <BookingCard onCheck={() => navigation.navigate("details")} />
          <BookingCard onCheck={() => navigation.navigate("details")} />
          <BookingCard onCheck={() => navigation.navigate("details")} />
          <BookingCard onCheck={() => navigation.navigate("details")} />
          <BookingCard onCheck={() => navigation.navigate("details")} />
          <BookingCard onCheck={() => navigation.navigate("details")} />
          <BookingCard onCheck={() => navigation.navigate("details")} />
        </ScrollView>
      </View>
      <View style={styles.bottomButtonView}>
        <CustomAuthButton
          title="Booking"
          txtColor={cardBg}
          bgColor={mainColor}
        />
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  detailsScreenView: {
    width: "100%",
    height: "100%",
    backgroundColor: screenBg,
  },
  bottomButtonView: {
    width: "100%",
    height: "10%",
    backgroundColor: cardBg,
    ...allCenter,
  },
  greenHeader: {
    width: "100%",
    height: "15%",
    backgroundColor: mainColor,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    ...allCenter,
    paddingTop: StatusBar.currentHeight,
    position: "relative",
  },
  backButtonView: {
    position: "absolute",
    marginTop: StatusBar.currentHeight,
    left: w("3%"),
    bottom: "17%",
    width: "18%",
    height: "70%",
    ...allCenter,
  },
  bodyContentView: { width: "100%", height: "75%" },
});
