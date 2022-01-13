import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthScreen from "../views/AuthScreen";
import MySplashScreen from "../views/MySplashScreen";
import ForgotPassScreen from "../views/ForgotPassScreen";
import SuccessScreen from "../views/SuccessScreen";
import MyBottomTabNav from "./MyBottomTabNav";
import DetailsScreen from "../views/DetailsScreen";
import MapScreen from "../views/MapScreen";

const Stack = createStackNavigator();
export default function MyStackNavig() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={MySplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPswd"
          component={ForgotPassScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Success"
          component={SuccessScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="mainhomeApp"
          component={MyBottomTabNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="details"
          component={DetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="hotlCordinat"
          component={MapScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
