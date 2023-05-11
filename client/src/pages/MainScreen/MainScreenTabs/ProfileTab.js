import {

  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import CustomText from "../../../components/CustomText";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../../context/AppContext";
import axios from "axios";
import { API_HOST, token } from "@env";

const ProfileTab = () => {
  const { token } = useContext(AppContext);
  const navigation = useNavigation();
  const axiosOptions = {
    headers: {
      "x-access-token": token,
    },
  };

  const [user, setUser] = useState({});
  console.log(API_HOST);
  // console.log(user);
  // edit/phone

  useEffect(() => {
    const getInfoUser = async () => {
      console.log("fetch");
      try {
        const res = await axios.get(
          `${API_HOST}/api/users/profile`,
          axiosOptions
        );
        const Response = res.data;
        console.log(Response);
        setUser(Response);
      } catch (error) {
        let response = error.response.data;
        console.log(response);
      }
    };
    getInfoUser();
  }, []);

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.header}>
        {/* <Image source={{ uri: linkImg }} style={styles.img} /> */}
        <Image
          source={require("../../../../assets/img/UserLogo.png")}
          style={styles.img}
        />
        <View style={styles.textwrap}>
          <CustomText
            textValue={user?.username}
            fontSize={24}
            marginTop={0}
            color={"white"}
          />
          <CustomText
            textValue={user?.email}
            fontSize={16}
            marginTop={0}
            color={"white"}
          />
        </View>
      </View>

      <View style={styles.body}>
        <CustomText
          textValue={"Account"}
          fontSize={24}
          color={"white"}
          // paddingLeft={30}
          marginLeft={30}
        />
        <View style={styles.itemWrap}>
          <TouchableOpacity
            onPress={() => {
              console.log("navigate")
              navigation.navigate("Profile");
            }}
          >
            <CustomText
              textValue={"Profile"}
              fontSize={16}
              color={"white"}
              marginTop={10}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Payment");
            }}
          >
            <CustomText
              textValue={"Payment"}
              fontSize={16}
              color={"white"}
              marginTop={10}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Wishlist");
            }}
          >
            <CustomText
              textValue={"Wishlist"}
              fontSize={16}
              color={"white"}
              marginTop={10}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignIn");
          }}
          style={styles.logout}
        >
          <CustomText
            textValue={"Logout"}
            fontSize={16}
            color={"white"}
            marginTop={10}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  background: {
    backgroundColor: "#0F0F29",

    flex: 1,
  },

  header: {
    marginTop: 60,
    paddingLeft: 30,
    flexDirection: "row",
  },
  img: {
    width: 56,
    height: 56,
    borderRadius: 50,
  },
  textwrap: {
    position: "absolute",
    left: 100,
    top: -5,
  },
  email: {
    color: "white",
    marginTop: 4,
    fontSize: 16,
  },

  name: {
    marginTop: 0,
    color: "white",
    fontSize: 24,
  },

  //body
  body: {
    marginTop: 30,
  },
  textAccount: {
    fontWeight: 400,
    fontSize: 24,
    color: "white",
    paddingLeft: 30,
  },
  itemWrap: {
    marginTop: 15,
    paddingLeft: 30,
    paddingBottom: 10,
    backgroundColor: "#37474F",
  },
  item: {
    color: "white",
    marginTop: 10,
    fontSize: 16,
  },
  logout: {
    backgroundColor: "#37474F",
    marginTop: 40,
    paddingLeft: 30,
    paddingBottom: 10,
  },
});
export default ProfileTab;
