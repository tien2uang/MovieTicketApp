/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from "react";
import axios from "axios";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  AsyncStorage,
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

const Stack = createStackNavigator();

function Stacks() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="SignIn"
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
      <Stack.Screen name="Profile" component={Profile} />
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
        "https://7f72-2402-800-62d2-d261-52a-e9ee-d618-bc0a.ap.ngrok.io/api/auth/signin",
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
      <SafeAreaProvider>
        <NavigationContainer>
          <Stacks />
          {/* <View>
            <Button
            onPress={handleSubmit}
            title="Learn More"
            color="#841584"
            
            />
            </View> */}
        </NavigationContainer>
      </SafeAreaProvider>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  global: {},
});

export default App;
