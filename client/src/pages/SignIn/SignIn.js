import { Image, StyleSheet, Text, View } from "react-native";

// import Logo from './assets/img/logo.png';

import Logo from "../../../assets/img/logo.png";
import GoogleLogo from "../../../assets/img/Google.png";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import CustomText from "../../components/CustomText";
import IconButton from "../../components/IconButton";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { LoginSuccess } from "../../context/AppAction";
import { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { API_HOST } from "@env";
import { ScrollView } from 'react-native-gesture-handler';

const SignIn = () => {
  const data = {
    user: "Quang",
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("Warning");

  const { dispatch } = useContext(AppContext);
  const navigation = useNavigation();

  const signIn = async () => {
    console.log("click");

    const data = {
      email: email,
      password: password,
    };
    console.log(data);

    try {
      const res = await axios.post(`${API_HOST}/api/auth/signin`, data);
      const loginResponse = res.data;

      if (loginResponse.email == email) {
        dispatch(LoginSuccess(loginResponse));
        navigation.navigate("MainScreen");
      }
    } catch (error) {
      let response = error.response.data;

      if (response.message == "Invalid Password!") {
        setWarning("Password not correct");
      }

      if (response.message == "Email Not found!") {
        setWarning("Email not found!");
      }
    }

    // dispatch(LoginSuccess(data));
  };
  return (
    <SafeAreaView>
      <View style={styles.background}>
        <Image source={Logo} />
        <Text>Login to Your Account</Text>
        <CustomInput
          placeholder={"Email"}
          value={email}
          onChangeText={(val) => setEmail(val)}
          onFocus={() => {
            setWarning("");
          }}
        />
        <CustomInput
          placeholder={"Password"}
          value={password}
          onChangeText={(val) => setPassword(val)}
          onFocus={() => {
            setWarning("");
          }}
        />
        <CustomText textValue={warning} />
        <CustomButton
          onPress={() => {
            signIn();
          }}
          text="Login"
          bgColor="#4838D1"
          w={295}
          h={56}
          pad={15}
        />
        <CustomButton
          onPress={() => navigation.navigate("ForgotPassword")}
          text="Forgot Password ?"
          bgColor="#FFFFFF"
          fgColor="#F77A55"
          w={295}
          h={29}
          align="flex-end"
        />
        <CustomText textValue="Or login with" />
        <View style={styles.row}>
          <IconButton onPress={""} bgColor="#FFFFFF" imgSrc={GoogleLogo} />
        </View>
        <View style={styles.row}>
          <CustomText textValue="Bạn chưa có tài khoản ? " />
          <CustomButton
            onPress={() => navigation.navigate("SignUp")}
            text="Đăng ký tại đây"
            bgColor="#FFFFFF"
            fgColor="#F77A55"
            w={100}
            h={21}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#0F0F29",
    width: "100%",
    height: "100%"

  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 180,
    width: '100%',
  },
  content: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    // position: "absolute",
    width: 295,
    marginLeft: 45

    // left: 40,
    // top: 204,



  },
  signInOption: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 8

  }

})
export default SignIn;
