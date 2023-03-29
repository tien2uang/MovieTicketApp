import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../../../components/CustomButton";
import CustomText from "../../../components/CustomText";
import IconButton from "../../../components/IconButton";
import NavigationBar from "../../../components/NavigationBar";
import UserLogo from "../../../../assets/img/UserLogo.png";
import FilmButton from "../../../components/MainScreenComponents/FilmButton";
import SpidermanLogo from "../../../../assets/img/spider.png";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

const ProfileTab = () => {
  const navigation = useNavigation();
  const linkImg = "https://goeco.link/lWGWM";
  return (
    <SafeAreaView style={styles.background}>
      {/* <ScrollView>
        <Button
          title="Back"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <CustomText textValue={"Profile Tab"} />
        <Button
          title="Profile"
          onPress={() => {
            console.log("click profile");
            navigation.navigate("Profile_");
          }}
        />
        <Button
          title="Payment"
          onPress={() => {
            navigation.navigate("Payment");
          }}
        />
        <Button
          title="Wishlist"
          onPress={() => {
            navigation.navigate("Wishlist");
          }}
        />
        <Button
          title="Logout"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={{ color: "white" }}>test</Text>
      </ScrollView> */}

      <View style={styles.header}>
        {/* <Image source={{ uri: linkImg }} style={styles.img} /> */}
        <Image
          source={require("../../../../assets/img/UserLogo.png")}
          style={styles.img}
        />
        <View style={styles.textwrap}>
          <Text style={styles.name}>Quyết Nguyễn Thế</Text>
          <Text style={styles.email}>quyetnguyenthe05@gmail.com</Text>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.textAccount}>Account</Text>
        <View style={styles.itemWrap}>
          <TouchableOpacity>
            <Text
              onPress={() => {
                // console.log("click profile");
                navigation.navigate("Profile_");
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
    // width: "100%",
    // height: "100%",
    flex: 1,
  },

  // header
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
