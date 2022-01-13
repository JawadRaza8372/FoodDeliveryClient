import React from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import DishesCard from "../components/DishesCard";
import { cardBg, screenBg } from "../DeliveryColors";
import { h } from "react-native-responsiveness";
import BookingCard from "../components/BookingCard";
import HeadInfoMore from "../components/HeadInfoMore";
import HomeScreenHeader from "../components/HomeScreenHeader";
import FoodHotDeals from "../components/FoodHotDeals";

const HomeScreen = ({ navigation }) => {
  const bookingArr = [1, 2, 4, 5, 6, 7, 7, 8, 9];
  return (
    <View style={styles.HomeConter}>
      <View style={styles.homeHeaderView}>
        <HomeScreenHeader />
      </View>
      <View style={styles.homeBodyView}>
        <ScrollView
          contentContainerStyle={{
            width: "100%",
            paddingBottom: h("7%"),
          }}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingVertical: 10,
            }}
          >
            <FoodHotDeals
              islogo={1}
              heading="New"
              subheading="We are here with the best deserts intown."
            />
            <FoodHotDeals heading="Flash Offer" subheading="" />
          </ScrollView>
          <HeadInfoMore
            heading="Today's New Arrival"
            subheading="Best of Today's food list."
          />
          <View style={styles.dishesViewdisp}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {bookingArr.map((dat, index) => (
                <DishesCard key={index} />
              ))}
            </ScrollView>
          </View>
          <HeadInfoMore
            heading="Explore Resturants"
            subheading="Check your city's near by resturants."
          />
          {bookingArr.map((dat, index) => (
            <BookingCard
              key={index}
              onCheck={() => navigation.navigate("details")}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  HomeConter: {
    width: "100%",
    height: "100%",
    backgroundColor: screenBg,
    paddingTop: StatusBar.currentHeight,
  },
  homeHeaderView: { width: "100%", height: h("18%"), backgroundColor: cardBg },
  homeBodyView: { width: "100%", height: h("82%") },
  dishesViewdisp: {
    width: "100%",
    overflow: "hidden",
    height: h("28%"),
    paddingVertical: h("0.4%"),
    paddingHorizontal: 10,
  },
});
