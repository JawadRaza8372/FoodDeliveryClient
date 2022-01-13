import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { w, h } from "react-native-responsiveness";
import {
  allCenter,
  cardBg,
  greyText,
  justifyEvenly,
  lightColor,
  mainColor,
} from "../DeliveryColors";
const MySplashScreen = ({ navigation }) => {
  const [dataIndex, setdataIndex] = useState(0);
  const splashData = [
    {
      heading: "Nearby restaurants",
      subheading:
        "You don't have to go far to find a good restaurant,we have provided all the restaurants that is near you",
    },
    {
      heading: "Select the Favorites Menu",
      subheading:
        "Now eat well, don't leave the house,You can choose your favorite food only with one click",
    },
    {
      heading: "Good food at a cheap price",
      subheading: "You can eat at expensive restaurants with affordable price",
    },
  ];

  return (
    <View style={styles.splashView}>
      <View style={styles.contentView}>
        <Image
          source={
            dataIndex === 0
              ? require(`../../assets/splash1.png`)
              : dataIndex === 1
              ? require(`../../assets/splash2.png`)
              : require("../../assets/splash3.png")
          }
          style={styles.spalshImg}
        />
        <View style={styles.textCont}>
          <Text style={styles.heading}>{splashData[dataIndex]?.heading}</Text>
          <Text style={styles.subheading}>
            {splashData[dataIndex]?.subheading}
          </Text>
        </View>
      </View>
      <View style={styles.bottomNavView}>
        <View style={styles.bottomNav}>
          {dataIndex < 2 ? (
            <TouchableOpacity
              style={styles.transparentButton}
              onPress={() => navigation.navigate("Auth")}
            >
              <Text style={styles.SkipButton}>Skip</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.transparentButton} />
          )}
          <View style={styles.navdotsCont}>
            {splashData.map((dat, index) => (
              <View
                key={index}
                style={{
                  width: index === dataIndex ? 15 : 10,
                  height: index === dataIndex ? 15 : 10,
                  borderRadius: 10,
                  marginHorizontal: 2,
                  backgroundColor: index === dataIndex ? mainColor : lightColor,
                }}
              />
            ))}
          </View>
          <TouchableOpacity
            style={styles.transparentButton}
            onPress={() => {
              if (dataIndex < 2) {
                setdataIndex(dataIndex + 1);
              } else {
                navigation.navigate("Auth");
              }
            }}
          >
            <AntDesign name="arrowright" size={25} color={mainColor} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MySplashScreen;

const styles = StyleSheet.create({
  splashView: {
    width: "100%",
    height: "100%",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: cardBg,
  },
  textCont: {
    width: "90%",
    ...allCenter,
    flexDirection: "column",
    marginTop: h("4%"),
  },
  heading: {
    color: "#1F2937",
    fontSize: h("3.5%"),
    marginBottom: h("1%"),
  },
  transparentButton: {
    width: "20%",
    height: "100%",
    ...allCenter,
  },
  subheading: {
    color: greyText,
    fontSize: h("2%"),
    textAlign: "center",
  },
  SkipButton: { color: greyText, fontSize: h("2.5%") },
  bottomNav: {
    width: "95%",
    height: "95%",
    ...justifyEvenly,
    flexDirection: "row",
  },
  spalshImg: {
    width: w("90%"),
    height: h("23%"),
    resizeMode: "contain",
  },
  contentView: {
    width: "100%",
    height: "90%",
    ...allCenter,
  },
  bottomNavView: {
    width: "100%",
    height: "10%",
    ...allCenter,
  },
  navdotsCont: {
    width: "50%",
    height: "100%",
    ...allCenter,
    flexDirection: "row",
  },
});
