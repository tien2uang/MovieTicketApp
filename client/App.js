/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState, useCallback } from 'react';
import { SvgXml } from 'react-native-svg';
import { useFonts } from 'expo-font';



import {
  StyleSheet, View,
} from 'react-native';


import ForgotPassword from './src/pages/ForgotPassword/ForgotPassword';
import MainScreen from './src/pages/MainScreen/MainScreen';
import SignIn from './src/pages/SignIn/SignIn';
import SignUp from './src/pages/SignUp/SignUp';
import ConfirmRegister from './src/pages/ConfirmRegister/ConfirmRegister';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import MovieDetail from './src/pages/MovieDetail/MovieDetail';
import TransactionDetail from './src/pages/TransactionDetail/TransactionDetail';
import BookingDetail from './src/pages/BookingDetail/BookingDetail';
import SelectSeat from "./src/pages/SelectSeat/SelectSeat";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppContextProvider } from './src/context/AppContext';
import Payment from './src/pages/Payment/Payment';
import Wishlist from './src/pages/Wishlist/Wishlist';
import Profile from './src/pages/Profile/Profile';
import SelectCreditCard from './src/pages/SelectCreditCard/SelectCreditCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import * as SplashScreen from 'expo-splash-screen';
import ConfirmResetCode from './src/pages/ForgotPassword/ConfirmResetCode';
import ResetPassword from './src/pages/ForgotPassword/ResetPassword';
const Stack = createStackNavigator();
// SplashScreen.preventAutoHideAsync();
function Stacks() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="MainScreen"
    >
      <Stack.Screen
        name="SignIn"
        component={SignIn}

      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}

      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}

      />

      <Stack.Screen
        name="ConfirmRegister"
        component={ConfirmRegister}

      />
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}

      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetail}

      />
      <Stack.Screen
        name='TransactionDetail'
        component={TransactionDetail}
      />
      <Stack.Screen
        name='BookingDetail'
        component={BookingDetail}
      />
      <Stack.Screen
        name='SelectSeat'
        component={SelectSeat}
      />
      <Stack.Screen
        name='Payment'
        component={Payment}
      />
      <Stack.Screen
        name='Wishlist'
        component={Wishlist}
      />
      <Stack.Screen
        name='Profile'
        component={Profile}
      />
      <Stack.Screen
        name='SelectCreditCard'
        component={SelectCreditCard}
      />
      <Stack.Screen
        name='ConfirmResetCode'
        component={ConfirmResetCode}
      />
      <Stack.Screen
        name='ResetPassword'
        component={ResetPassword}
      />




    </Stack.Navigator>
  );
}



function App() {

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/PoppinsRegular400.ttf'),
    'Poppins-Bold': require("./assets/fonts/PoppinsBold700.ttf"),
    'Poppins-SemiBold': require("./assets/fonts/PoppinsSemiBold600.ttf"),
    'Poppins-Medium': require("./assets/fonts/PoppinsMedium500.ttf"),
    'JetBrainsMono-Regular': require("./assets/fonts/JetBrainsMono-Regular.ttf")
  });

  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);
  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

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
