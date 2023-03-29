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
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

const Profile = () => {
  const { dispatch } = useContext(AppContext);
  const navigation = useNavigation();
  // const route = useRoute();
  // #CDCDCD
  console.log("render component");

  const user = {
    username: "Quyet",
    password: "123456",
    email: "quyet@gmail.com",
    phone: "123456789",
    creditCard1: "13123",
    creditCard2: null,
  };

  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [phone, setphone] = useState(user.phone);
  const [creditCard1, setCreditCard1] = useState(user.creditCard1);
  const [creditcard2, setcreditcard2] = useState(user.creditCard2);
  console.log(user.creditCard2);

  const handleUpdateUsername = async () => {
    if (username !== user.username) {
      console.log(username);
    } else {
      console.log("username not change");
    }
  };

  const handleUpdateEmail = async () => {
    if (email !== user.email) {
      console.log(email);
    } else {
      alert("email not change");
    }
  };

  const handleUpdatePassword = async () => {
    if (password !== user.password) {
      console.log(password);
    } else {
      alert("Password not change");
    }
  };

  const handleUpdatePhone = async () => {
    if (phone !== user.phone) {
      console.log(phone);
    } else {
      alert("phone not change");
    }
  };

  const handleUpdateCreditCard1 = async () => {
    if (creditCard1 !== user.creditCard1) {
      console.log(creditCard1);
    } else {
      alert("CreditCard1 not change");
    }
  };

  const handleUpdateCreditCard2 = async () => {
    if (creditcard2 == null) {
      console.log("credit card null");
    } else if (creditcard2 !== user.creditCard2) {
      console.log(creditcard2);
    } else {
      alert("CreditCard2 not change");
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
            {/* <View style={styles.item}>
              <CustomText textValue={"username"} />
              <TextInput
                style={styles.username}
                placeholder=""
                // value={user.username}
                // defaultValue={user.username}
                autoCapitalize="characters"
                // maxLength={6}
                // keyboardType="number-pad" 
                // email
                // secureTextEntry={true}
              />
            </View> */}

            <View style={styles.item}>
              <Text style={styles.text}>Username</Text>
              <TextInput
                onChangeText={(text) => setUsername(text)}
                placeholder="Username"
                defaultValue={user.username}
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
                placeholder="Email"
                defaultValue={user.email}
                style={styles.inputText}
                keyboardType="email-address"
              />
              <TouchableOpacity onPress={handleUpdateEmail}>
                <Text style={styles.update}>Update</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.item}>
              <Text style={styles.text}>Password</Text>
              <TextInput
                onChangeText={(text) => setPassword(text)}
                placeholder="Password"
                defaultValue={user.password}
                style={styles.inputText}
                // keyboardType="visible-password"assads
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
                defaultValue={user.phone}
                style={styles.inputText}
                keyboardType="number-pad"
              />
              <TouchableOpacity onPress={handleUpdatePhone}>
                <Text style={styles.update}>Update</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <Text style={styles.text}>Credit card 1</Text>
              <TextInput
                onChangeText={(text) => setCreditCard1(text)}
                placeholder="Credit card 1"
                defaultValue={user.creditCard1}
                style={styles.inputText}
                keyboardType="number-pad"
              />
              <TouchableOpacity onPress={handleUpdateCreditCard1}>
                <Text style={styles.update}>
                  {user.creditCard1 == null ? "Add" : "Update"}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.item}>
              <Text style={styles.text}>Credit card 2</Text>
              <TextInput
                onChangeText={(text) => setcreditcard2(text)}
                placeholder="Credit card 2"
                defaultValue={user.creditCard2}
                style={styles.inputText}
                keyboardType="number-pad"
              />
              <TouchableOpacity onPress={handleUpdateCreditCard2}>
                <Text style={styles.update}>
                  {user.creditCard2 == null ? "Add" : "Update"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              console.log("bakc");
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
    // flex: 1,
  },
  header: {
    marginTop: 40,
    // backgroundColor: "white",
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
});
export default Profile;
