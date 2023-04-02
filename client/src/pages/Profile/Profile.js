import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomText from "../../components/CustomText";
import UserLogo from "../../../assets/img/UserLogo.png";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import { API_HOST, token } from "@env";

const Profile = () => {
  // const { token } = useContext(AppContext);
  const navigation = useNavigation();

  const [user, setUser] = useState({});
  const [username, setUsername] = useState("-1");
  const [password, setPassword] = useState(-1);
  const [phone, setphone] = useState(-1);

  // #CDCDCD
  const axiosOptions = {
    headers: {
      "x-access-token": token,
    },
  };
  console.log(user);

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

  const handleUpdateUsername = async () => {
    if (username !== user.username && username != "-1") {
      console.log(username);
      const data = {
        username: username,
      };
      console.log(data);
      try {
        console.log("fetch");
        const res = await axios.put(
          `${API_HOST}/api/users/edit/username`,
          data,
          axiosOptions
        );
        const Response = res.data;
        console.log(Response);
        alert("Thay đổi username thành công");
      } catch (error) {
        let response = error.response.data;
        console.log(response);
      }
    } else {
      alert("username chưa thay đổi");
    }
  };

  const handleUpdatePassword = async () => {
    if (password !== user.password && password != -1) {
      console.log(password);
      const data = {
        password: password,
      };
      console.log(data);
      try {
        console.log("fetch");
        const res = await axios.post(
          `${API_HOST}/api/users/changepassword`,
          data,
          axiosOptions
        );
        const Response = res.data;
        console.log(Response);
        alert("Thay đổi password thành công");
      } catch (error) {
        let response = error.response.data;
        console.log(response);
      }
    } else {
      alert("Password not change");
    }
  };

  const handleUpdatePhone = async () => {
    if (phone !== user.phone && phone != -1) {
      console.log(phone);
      const data = {
        phone: phone,
      };
      console.log(data);
      try {
        console.log("fetch");
        const res = await axios.put(
          `${API_HOST}/api/users/edit/phone`,
          data,
          axiosOptions
        );
        const Response = res.data;
        console.log(Response);
        alert("Thay đổi số điện thoại thành công");
      } catch (error) {
        let response = error.response.data;
        console.log(response);
      }
    } else {
      alert("phone not change");
    }
  };

  // #607D8B
  return (
    <SafeAreaView>
      <View style={styles.background}>
        <ScrollView>
          <View style={styles.header}>
            <Image style={styles.img} source={UserLogo}></Image>
            <TouchableOpacity>
              <Text style={{ color: "#0C8CE9", marginTop: 10 }}>
                Change profile photo
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.body}>
            <View style={styles.item}>
              <Text style={styles.text}>Username</Text>
              <TextInput
                onChangeText={(text) => setUsername(text)}
                placeholder="Username"
                defaultValue={user?.username}
                style={styles.inputText}
              />
              <TouchableOpacity onPress={handleUpdateUsername}>
                <Text style={styles.update}>Update</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.item}>
              <Text style={styles.text}>Email</Text>
              <TextInput
                onChangeText={(text) => setEmail(text)}
                editable={false}
                placeholder="Email"
                defaultValue={user?.email}
                style={styles.inputText}
                keyboardType="email-address"
              />
            </View>

            <View style={styles.item}>
              <Text style={styles.text}>Password</Text>
              <TextInput
                onChangeText={(text) => setPassword(text)}
                placeholder="Password"
                // defaultValue={user?.password}
                defaultValue="123456"
                style={styles.inputText}
                secureTextEntry={true}
              />
              <TouchableOpacity onPress={handleUpdatePassword}>
                <Text style={styles.update}>Update</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.item}>
              <Text style={styles.text}>Phone</Text>
              <TextInput
                onChangeText={(text) => setphone(text)}
                placeholder="Phone"
                defaultValue={user?.phone}
                style={styles.inputText}
                keyboardType="number-pad"
              />
              <TouchableOpacity onPress={handleUpdatePhone}>
                <Text style={styles.update}>Update</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.creditCard}
              onPress={() => navigation.navigate("CreditCardDetail")}
            >
              <Text style={styles.creditCardText}>Credit card</Text>
              <Text style={styles.icon}>icon</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            // title="bakc"
            style={{
              position: "absolute",
              color: "white",
              top: 40,
              left: 20,
            }}
          >
            <Text
              style={{
                color: "white",
              }}
            >
              Back
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  background: {
    backgroundColor: "#0F0F29",
    width: "100%",
    height: "100%",
  },
  header: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    marginBottom: 40,
    padding: 15,
  },
  img: {
    width: 100,
    height: 100,
  },
  item: {
    marginVertical: 10,
  },
  text: {
    opacity: 0.5,
    marginBottom: 5,
    color: "white",
  },
  inputText: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: "#607D8B",
    color: "white",
    marginBottom: 10,
  },
  update: {
    color: "white",
    position: "absolute",
    right: 0,
    top: -50,
    opacity: 0.5,
  },
  creditCard: {
    backgroundColor: "#37474F",
    borderRadius: 20,
    height: 50,
    marginTop: 20,
  },
  creditCardText: {
    fontSize: 20,
    fontWeight: 400,
    color: "white",
    position: "absolute",
    top: 10,
    left: 10,
  },
  icon: {
    color: "white",
    position: "absolute",
    top: 15,
    right: 10,
  },
});
export default Profile;
