import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Icon,
  FlastList,
  Image,
} from "react-native";
import CustomButton from "../../../components/CustomButton";
import CustomText from "../../../components/CustomText";
import IconButton from "../../../components/IconButton";
import NavigationBar from "../../../components/NavigationBar";
import UserLogo from "../../../../assets/img/UserLogo.png";
import FilmButton from "../../../components/MainScreenComponents/FilmButton";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "react-native-vector-icons/AntDesign";
import { API_HOST, token } from "@env";
import axios from "axios";
import MovieButton from "../../../components/SearchScreenComponents/MovieButton";
import { useState, useEffect } from "react";
import SpidermanLogo from "../../../../assets/img/spider.png";

const numListMovies = 2;

const SearchTab = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [movies, setMovies] = useState();
  const [textInput, setTextInput] = useState();
  const axiosOptions = {
    headers: {
      "x-access-token": token,
    },
  };
  const handleChangeText = async (value) => {
    const result = await axios.post(
      `${API_HOST}/api/movies/search`,
      {
        title: value,
      },
      axiosOptions
    );
    setMovies(result.data);
  };
  console.log(movies);

  const renderMovies = ({ item }) => (
      <MovieButton
        onPress={() => navigation.navigate("MovieDetail", { item: item })}
        imgSrc={{ uri: item.avt }}
        title={item.title}
        duration={item.duration}
      ></MovieButton>
  );
  return (
    <SafeAreaView>
      <View style={styles.background}>
        <ScrollView>
          <View style={styles.text_input_wrapper}>
            <AntDesign
              name="search1"
              style={{ color: "white", fontSize: 20, padding: 10 }}
            ></AntDesign>
            <TextInput
              style={styles.text_input}
              placeholder="Search movie..."
              placeholderTextColor="#90A4AE"
              onChangeText={(value) => handleChangeText(value)}
            ></TextInput>
          </View>
        </ScrollView>
        <FlatList
          style={styles.moviesList}
          renderItem={renderMovies}
          data={movies}
          key={"**"}
          showsVerticalScrollIndicator={true}
          scrollEnabled={true}
          numColumns={numListMovies}
        ></FlatList>
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
  text_input_wrapper: {
    flex: 1,
    marginTop: 10,
    marginBottom: 25,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#455A64",
    borderWidth: 1,
    borderColor: "#78909C",
    borderRadius: 8,
  },
  text_input: {
    backgroundColor: "#455A64",
    paddingRight: 10,
    paddingVertical: 15,
    flex: 1,
    color: "#90A4AE",
  },
});
export default SearchTab;
