import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const MovieButton = ({ onPress, imgSrc, title, duration }) => {
  const navigation = useNavigation();
  return (
    <Pressable style={[styles.movie_wrapper]} onPress={onPress}>
      <Image
        style={{ width: 160, height: 240, borderRadius: 15 }}
        source={imgSrc}
      />

      <View style={styles.movie_name_wrapper}>
        <Text style={styles.movie_name}>{title}</Text>
      </View>
      <Text style={styles.movie_duration}>Duration: {duration}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  movie_wrapper: {
    borderWidth: 1,
    borderColor: "#78909C",
    marginVertical: 15,
    marginHorizontal: 22,
    borderRadius: 15,
    paddingBottom: 20,
    flexDirection: "column",
  },
  movie_img: {},
  movie_name_wrapper: {
    flexDirection: "row",
  },
  movie_name: {
    width: 0,
    flexGrow: 1,
    flex: 1,
    color: "white",
    fontSize: 18,
    fontWeight: 700,
    marginHorizontal: 10,
    marginTop: 5,
    marginBottom: 10,
  },
  movie_duration: {
    color: "white",
    marginLeft: 10,
    fontSize: 12,
  },
});

export default MovieButton;
