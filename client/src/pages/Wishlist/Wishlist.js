import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Button,
  View,
} from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomText from "../../components/CustomText";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import WishlistItem from "./WishlistItem";

const Wishlist = () => {
  const { dispatch } = useContext(AppContext);
  const navigation = useNavigation();

  const data = [
    {
      movieID: 1,
      title: "The matrix",
      director: "Quyet",
      category: "drama",
      ticket_count: 200,
    },
    {
      movieID: 2,
      title: "The matrix 2",
      director: "Quang",
      category: "drama",
      ticket_count: 150,
    },
    {
      movieID: 3,
      title: "The matrix 3",
      director: "Phong",
      category: "drama",
      ticket_count: 120,
    },
  ];

  return (
    <SafeAreaView>
      <View style={styles.background}>
        <ScrollView>
          {/* <CustomText textValue={"Wishlist"} /> */}
          <View style={styles.header}>
            <Text style={styles.wishlist}>Wishlist</Text>
          </View>

          <View style={styles.body}>
            {data.map((item, index) => {
              return <WishlistItem key={index} movieInfo={item} />;
            })}
          </View>

          <Button
            title="Back"
            onPress={() => {
              navigation.goBack();
            }}
          />
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
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    marginTop: 20,
  },
  wishlist: {
    fontWeight: 400,
    color: "white",
    fontSize: 25,
  },
  body: {
    backgroundColor: "#37474F",
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 40,
  },
});
export default Wishlist;
