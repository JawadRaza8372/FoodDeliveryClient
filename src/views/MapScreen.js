import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import MapView, { Marker } from "react-native-maps";
import HomeScreenHeaderProfilePic from "../components/HomeScreenHeaderProfilePic";
import { w, h } from "react-native-responsiveness";
import { allCenter, mainColor } from "../DeliveryColors";
const MapScreen = ({ navigation }) => {
  const rehmanplaza = {
    latitude: 32.0753295,
    longitude: 72.6767892,
  };
  return (
    <>
      <View style={styles.mapCont}>
        <View style={styles.headerMap}>
          <HomeScreenHeaderProfilePic
            maps={true}
            icon="chevron-left"
            onClickfun={() => {
              navigation.goBack();
            }}
          />
        </View>
        <MapView
          provider="google"
          initialRegion={{
            latitude: 32.074,
            longitude: 72.6861,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.map}
        >
          <Marker coordinate={rehmanplaza} title="Hotle Name" description=" " />
        </MapView>
      </View>
    </>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  mapCont: {
    width: "100%",
    height: "100%",
    paddingTop: StatusBar.currentHeight,
    position: "relative",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  headerMap: {
    width: w("100%"),
    height: h("10%"),
    position: "absolute",
    top: StatusBar.currentHeight,
    zIndex: 1,
    backgroundColor: mainColor,
    overflow: "hidden",
    ...allCenter,
  },
});
