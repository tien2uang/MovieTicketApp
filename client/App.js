/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from "react";
import axios from "axios";

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  AsyncStorage,
  Image,
  Button,
} from "react-native";

import ForgotPassword from "./src/pages/ForgotPassword/ForgotPassword";
import MainScreen from "./src/pages/MainScreen/MainScreen";
import SignIn from "./src/pages/SignIn/SignIn";
import SignUp from "./src/pages/SignUp/SignUp";
import ConfirmRegister from "./src/pages/ConfirmRegister/ConfirmRegister";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import MovieDetail from "./src/pages/MovieDetail/MovieDetail";
import TransactionDetail from "./src/pages/TransactionDetail/TransactionDetail";
import BookingDetail from "./src/pages/BookingDetail/BookingDetail";
import SelectSeat from "./src/pages/SelectSeat/SelectSeat";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppContextProvider } from "./src/context/AppContext";
import Payment from "./src/pages/Payment/Payment";
import Wishlist from "./src/pages/Wishlist/Wishlist";
import Profile from "./src/pages/Profile/Profile";
import SelectCreditCard from "./src/pages/SelectCreditCard/SelectCreditCard";
import { SafeAreaView } from "react-native-safe-area-context";
import CreditCard from "./src/pages/Profile/CreditCard";
const Stack = createStackNavigator();

function Stacks() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="MainScreen"
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

      <Stack.Screen name="ConfirmRegister" component={ConfirmRegister} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="MovieDetail" component={MovieDetail} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetail} />
      <Stack.Screen name="BookingDetail" component={BookingDetail} />
      <Stack.Screen name="SelectSeat" component={SelectSeat} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Wishlist" component={Wishlist} />
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="SelectCreditCard" component={SelectCreditCard} />
      <Stack.Screen name="CreditCardDetail" component={CreditCard} />
    </Stack.Navigator>
  );
}

function App() {
  const axiosOptions = {
    headers: {
      "x-access-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlF1YW5nTlQiLCJlbWFpbCI6ImR1Y2hlMzQ1QGdtYWlsLmNvbSIsImlhdCI6MTY3OTM5MTc4NSwiZXhwIjoxNjc5NDc4MTg1fQ.lH4lf-7PUK6c0Ta0N4nw-nFWFBzQAqGoAYFueIeIPBE",
    },
  };

  const handleSubmit = async () => {
    const data = {
      username: "QuangNT",
      email: "duche345@gmail.com",
      password: "lolpatther",
      isVerified: false,
      phone: "0932134123",
    };
    try {
      const res = await axios.post(
        "http://1188-183-80-75-239.ngrok.io/api/auth/signin",
        data,
        axiosOptions
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <AppContextProvider>
      <SafeAreaProvider style={styles.appContainer}>
        <NavigationContainer>
          <Stacks />
        </NavigationContainer>
      </SafeAreaProvider>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  global: {},
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 0,
    // backgroundColor: "#263238",
  },
});

export default App;
