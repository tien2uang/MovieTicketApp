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
import CustomInput from "../../components/CustomInput";
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
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [phone, setphone] = useState();
  const [warning, setWarning] = useState({
    username: "",
    phone: "",
    password: "",
  });

  // #CDCDCD
  const axiosOptions = {
    headers: {
      "x-access-token": token,
    },
  };

  useEffect(() => {
    console.log("fetch");
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

  const handelUpdate = async () => {
    if (username == undefined && password == undefined && phone == undefined) {
      alert("Thông tin chưa thay đổi");
    } else {
      if (username == "" || password == "" || phone == "") {
        if (username == "") {
          setWarning((prevState) => ({
            ...prevState,
            username: "Username không được trống",
          }));
        }

        if (password == "") {
          setWarning((prevState) => ({
            ...prevState,
            password: "Password không được trống",
          }));
        }

        if (phone == "") {
          setWarning((prevState) => ({
            ...prevState,
            phone: "Phone không được trống",
          }));
        }
        return;
      }

      if (
        username !== user.username ||
        password !== user.password ||
        phone !== user.phone
      ) {
        if (username !== user.username) {
          handleUpdateUsername();
        }

        if (password !== user.password) {
          handleUpdatePassword();
        }

        if (phone !== user.phone) {
          handleUpdatePhone();
        }
        alert("Thay đổi thông tin thành công");
      }
    }
  };

  const handleUpdateUsername = async () => {
    const dataUsername = {
      username: username,
    };
    try {
      const res = await axios.put(
        `${API_HOST}/api/users/edit/username`,
        dataUsername,
        axiosOptions
      );
      const Response = res.data;
      console.log(Response);
    } catch (error) {
      let response = error.response.data;
      console.log(response);
    }
  };

  const handleUpdatePassword = async () => {
    const dataPassword = {
      password: password,
    };
    try {
      console.log("fetch");
      const res = await axios.post(
        `${API_HOST}/api/users/changepassword`,
        dataPassword,
        axiosOptions
      );
      const Response = res.data;
      console.log(Response);
    } catch (error) {
      let response = error.response.data;
      console.log(response);
    }
  };

  const handleUpdatePhone = async () => {
    const dataPhone = {
      phone: phone,
    };
    try {
      const res = await axios.put(
        `${API_HOST}/api/users/edit/phone`,
        dataPhone,
        axiosOptions
      );
      const Response = res.data;
      console.log(Response);
    } catch (error) {
      let response = error.response.data;
      console.log(response);
    }
  };

  // #607D8B
  return (
    <SafeAreaView>
      <View style={styles.background}>
        <ScrollView>
          <View style={styles.header}>
            <Image style={styles.img} source={UserLogo}></Image>
          </View>

          <View style={styles.body}>
            <View style={styles.item}>
              <Text style={styles.text}>Username</Text>
              <CustomInput
                placeholder={"Username"}
                defaultValue={user?.username}
                onFocus={() =>
                  setWarning((prevState) => ({
                    ...prevState,
                    username: "",
                  }))
                }
                onChangeText={(text) => setUsername(text)}
              />

              <Text style={styles.warning}>{warning.username}</Text>
            </View>

            <View style={styles.item}>
              <Text style={styles.text}>Email</Text>
              <CustomInput
                placeholder={"Email"}
                editable={false}
                value={user?.email}
                keyboardType="email-address"
              />
            </View>

            <View style={styles.item}>
              <Text style={styles.text}>Password</Text>
              <CustomInput
                placeholder={"Password"}
                defaultValue={"123456"}
                security={true}
                onFocus={() =>
                  setWarning((prevState) => ({
                    ...prevState,
                    password: "",
                  }))
                }
                onChangeText={(text) => setPassword(text)}
              />
              <Text style={styles.warning}>{warning.password}</Text>
            </View>

            <View style={styles.item}>
              <Text style={styles.text}>Phone</Text>

              <CustomInput
                placeholder={"Phone"}
                defaultValue={user?.phone}
                keyboardType={"number-pad"}
                onFocus={() =>
                  setWarning((prevState) => ({
                    ...prevState,
                    phone: "",
                  }))
                }
                onChangeText={(text) => setphone(text)}
              />
              <Text style={styles.warning}>{warning.phone}</Text>
            </View>

            <TouchableOpacity
              style={styles.creditCard}
              onPress={() => navigation.navigate("CreditCardDetail")}
            >
              <Text style={styles.creditCardText}>Credit card</Text>
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
                fontFamily: "Poppins-Regular",
              }}
            >
              Back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handelUpdate}
            style={{
              position: "absolute",
              color: "white",
              top: 40,
              right: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "Poppins-Regular",
              }}
            >
              Update
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
    marginLeft: 30,
  },
  img: {
    width: 80,
    height: 80,
  },
  item: {
    marginVertical: 5,
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
    fontFamily: "Poppins-Regular",
  },
  warning: {
    color: "red",
    fontFamily: "Poppins-Regular",
    position: "absolute",
    bottom: -7,
  },
  creditCard: {
    display: "flex",
    backgroundColor: "#4838D1",
    borderRadius: 15,
    height: 50,
    marginTop: 20,
    marginRight: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  creditCardText: {
    fontSize: 20,
    fontWeight: 400,
    color: "white",
    fontFamily: "Poppins-Regular",
  },
  icon: {
    color: "white",
    position: "absolute",
    top: 15,
    right: 10,
  },
});
export default Profile;
