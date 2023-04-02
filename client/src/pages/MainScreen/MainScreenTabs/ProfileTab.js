import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../../context/AppContext";
import axios from "axios";
import { API_HOST, token } from "@env";

const ProfileTab = () => {
  // const { token } = useContext(AppContext);
  const navigation = useNavigation();
  const axiosOptions = {
    headers: {
      "x-access-token": token,
    },
  };

  const [user, setUser] = useState({});
  console.log(user);
  console.log(token);

  useEffect(() => {
    const getInfoUser = async () => {
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
          <Text style={styles.name}>{user?.username}</Text>
          <Text style={styles.email}>{user?.email}</Text>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.textAccount}>Account</Text>
        <View style={styles.itemWrap}>
          <TouchableOpacity>
            <Text
              onPress={() => {
                navigation.navigate("ProfileScreen");
              }}
              style={styles.item}
            >
              Profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.item}
              onPress={() => {
                navigation.navigate("Payment");
              }}
            >
              Payment
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.item}
              onPress={() => {
                navigation.navigate("Wishlist");
              }}
            >
              Wishlist
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <TouchableOpacity style={styles.logout}>
          <Text
            style={styles.item}
            onPress={() => {
              navigation.navigate("SignIn");
            }}
          >
            Logout
          </Text>
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
    width: 55,
    height: 55,
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
    fontSize: 15,
  },

  name: {
    marginTop: 0,
    color: "white",
    fontSize: 25,
  },

  //body
  body: {
    marginTop: 30,
  },
  textAccount: {
    fontWeight: 400,
    fontSize: 30,
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
    fontSize: 20,
  },
  logout: {
    backgroundColor: "#37474F",
    marginTop: 40,
    paddingLeft: 30,
    paddingBottom: 10,
  },
});
export default ProfileTab;
