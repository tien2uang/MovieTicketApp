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
  console.log("render");
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
        setWishlist(fetchedWishlist);
        const movieResults = await Promise.all(
          fetchedWishlist.map((id) =>
            axios.get(`${API_HOST}/api/movies/details/${id}`, axiosOptions)
          )
        );
        const fetchedMovies = movieResults.map((result) => result.data);
        setMovies(fetchedMovies);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.background}>
        <ScrollView>
          {/* <CustomText textValue={"Wishlist"} /> */}
          <View style={styles.header}>
            <Text style={styles.wishlist}>Wishlist</Text>
          </View>

          {/* <View style={styles.body}> */}
          {movies?.length == 0 ? (
            <View style={styles.noWishlist}>
              <Text style={{ color: "white", fontSize: 20 }}>
                Bạn chưa có phim yêu thích nào
              </Text>
            </View>
          ) : (
            <View style={styles.body}>
              {movies?.map((item, index) => {
                // return <View key={index}></View>;
                return <WishlistItem key={index} movies={item} />;
                // return (
                //   <Pressable
                //     key={index}
                //     style={styles.item}
                //     onPress={() => {
                //       console.log("click");
                //       navigation.navigate("MovieDetail", { item: item });
                //     }}
                //   >
                //     <Text style={styles.nameOfFilm}>{item}</Text>

                //     <Text style={styles.director}>
                //       Director: {item.director}
                //     </Text>
                //     <Text style={styles.info}>Category: {item.category}</Text>

                //     <Text style={styles.price}>{item.ticketCount}$</Text>
                //     <Text style={styles.icon}>star</Text>
                //   </Pressable>
                // );
              })}
            </View>
          )}
          {/* </View> */}

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
  noWishlist: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});
export default Wishlist;
