import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import { API_HOST, token } from "@env";
import CustomText from "../../components/CustomText";

const WishlistItem = (props) => {
  const navigation = useNavigation();
  // const { token } = useContext(AppContext);
  const movie = props.movies;
  const [star, setStar] = useState(true);

  const axiosOptions = {
    headers: {
      "x-access-token": token,
    },
  };
  // console.log(star);
  const handlePressStar = async () => {
    setStar(!star);
    if (star) {
      const data = {
        movieID: movie.movieID,
      };
      try {
        console.log("fetch");
        const res = await axios.put(
          `${API_HOST}/api/users/wishlist/delete`,
          data,
          axiosOptions
        );
        const Response = res.data;
        console.log(Response);
        alert("Xóa phim khỏi wishlist thành công");
      } catch (error) {
        let response = error.response.data;
        console.log(response);
      }
    }
  };

  return (
    <View>
      <Pressable
        style={styles.item}
        onPress={() => {
          console.log("click");
          navigation.navigate("MovieDetail", { item: movie });
        }}
      >
        <CustomText textValue={movie.title} color={"white"} fontSize={20} />

        {/* <Text style={styles.director}>Director: {movie.director}</Text>
        <Text style={styles.info}>Category: {movie.category}</Text> */}

        <CustomText
          textValue={"Director: " + movie.director}
          color={"white"}
          fontSize={14}
          marginTop={10}
        />
        <CustomText
          textValue={"Category: " + movie.category}
          color={"white"}
          fontSize={14}
        />

        <Text style={styles.price}>{movie.ticketCount}$</Text>
        <Text
          onPress={handlePressStar}
          style={star ? styles.star : styles.notStar}
        >
          star
        </Text>
      </Pressable>
    </View>
  );
};

export default WishlistItem;

const styles = StyleSheet.create({
  item: {
    paddingLeft: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#607D8B",
    paddingVertical: 10,
  },
  nameOfFilm: {
    fontWeight: 400,
    color: "white",
    fontSize: 20,
  },
  info: {
    color: "white",
    fontSize: 15,
  },
  director: {
    color: "white",
    fontSize: 15,
    marginTop: 15,
  },
  price: {
    position: "absolute",
    right: 0,
    top: 10,
    color: "white",
    fontWeight: 300,
    fontSize: 20,
    fontFamily: "Poppins-Regular",
  },
  star: {
    position: "absolute",
    right: 0,
    top: 40,
    fontSize: 14,
    color: "white",
  },
  notStar: {
    position: "absolute",
    right: 0,
    top: 40,
    fontSize: 14,
    color: "blue",
  },
});
