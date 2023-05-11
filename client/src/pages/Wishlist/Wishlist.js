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
  Pressable,
} from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomText from "../../components/CustomText";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import WishlistItem from "./WishlistItem";
import axios from "axios";
import { API_HOST, token } from "@env";

const Wishlist = () => {
  // const { token } = useContext(AppContext);
  const navigation = useNavigation();
  const [wishlist, setWishlist] = useState([]);
  const [movies, setMovies] = useState([]);

  const axiosOptions = {
    headers: {
      "x-access-token": token,
    },
  };
  console.log(wishlist);
  console.log(movies);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `${API_HOST}/api/users/wishlist/get`,
          axiosOptions
        );
        const fetchedWishlist = result.data[0].wishlist;
        console.log(fetchedWishlist);
        setWishlist(fetchedWishlist);

        const movieResults = await Promise.all(
          fetchedWishlist.map((id) =>
            axios.get(`${API_HOST}/api/movies/details/${id}`, axiosOptions)
          )
        );
        const fetchedMovies = movieResults.map((result) => result.data);
        setMovies(fetchedMovies);
      } catch (error) {
        console.error(error, "ko fetch dc");
      }
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.background}>
        <ScrollView>
          <View style={styles.header}>
            <CustomText textValue={"Wishlist"} color={"white"} fontSize={24} />
          </View>

          {movies?.length == 0 ? (
            <View style={styles.noWishlist}>

              <CustomText
                textValue={"No movie added to Wishlist"}
                color={"white"}
                fontSize={20}
              />
            </View>
          ) : (
            <View style={styles.body}>
              {movies?.map((item, index) => {
                // return <View key={index}></View>;
                return <WishlistItem key={index} movies={item} />;
              })}
            </View>
          )}
          {/* </View> */}

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <CustomButton
              onPress={() => {
                navigation.goBack();
              }}
              text="Back"
              bgColor="#4838D1"
              w={295}
              h={56}
              pad={15}
            />
          </View>
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
  noWishlist: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});
export default Wishlist;
