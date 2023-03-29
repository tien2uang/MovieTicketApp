import { View, Text, StyleSheet } from "react-native";
import React from "react";

const PaymentItem = (props) => {
  const movie = props.movieInfo;

  return (
    <View>
      <View style={styles.item}>
        <Text style={styles.nameOfFilm}>{movie.title}</Text>
        <View style={styles.info}>
          <Text style={{ color: "white", fontSize: 15 }}>{movie.seat}</Text>
          <Text style={{ color: "white", fontSize: 15 }}>{movie.date}</Text>
        </View>
        <Text style={styles.nameOfTheater}>{movie.theaterName}</Text>
        <Text style={styles.price}>{movie.price}$</Text>
      </View>
    </View>
  );
};

export default PaymentItem;

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
    flexDirection: "row",
    alignContent: "space-between",
    gap: 10,
    marginTop: 25,
  },
  nameOfTheater: {
    fontSize: 15,
    color: "white",
  },
  price: {
    position: "absolute",
    right: 0,
    top: 10,
    color: "white",
    fontWeight: 300,
    fontSize: 25,
  },
});
