import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const WishlistItem = (props) => {
  const navigation = useNavigation();

  const movie = props.movieInfo;
  return (
    <View>
      <Pressable
        style={styles.item}
        onPress={() => {
          console.log("click");
          navigation.navigate("MovieDetail", { item: movie });
        }}
      >
        <Text style={styles.nameOfFilm}>{movie.title}</Text>

        <Text style={styles.director}>Director: {movie.director}</Text>
        <Text style={styles.info}>Category: {movie.category}</Text>

        <Text style={styles.price}>{movie.ticket_count}$</Text>
        <Text style={styles.icon}>star</Text>
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
    fontSize: 25,
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
    fontSize: 25,
  },
  icon: {
    position: "absolute",
    right: 0,
    top: 50,
    color: "white",
    fontSize: 20,
  },
});
