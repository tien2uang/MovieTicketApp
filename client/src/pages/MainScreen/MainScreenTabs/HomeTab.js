import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
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

import { SafeAreaView } from "react-native-safe-area-context";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { AppContext } from "../../../context/AppContext";
import { API_HOST } from "@env";
import axios from "axios";
import PromoButton from "../../../components/MainScreenComponents/PromoButton";
import AvatarButton from "../../../components/MainScreenComponents/AvatarButton";

// const playingNowData = [
//     {
//         avt: "https://i.ibb.co/hccHgS6/spider.png",
//         trailerURL: "",
//         title: "",
//         duration: "",
//         releaseDate: "",
//         category: "",
//         description: ""
//     },
//     {
//         avt: "https://i.ibb.co/hccHgS6/spider.png",
//         trailerURL: "",
//         title: "",
//         duration: "",
//         releaseDate: "",
//         category: "",
//         description: ""
//     },
//     {
//         avt: "https://i.ibb.co/hccHgS6/spider.png",
//         trailerURL: "",
//         title: "",
//         duration: "",
//         releaseDate: "",
//         category: "",
//         description: ""
//     },
//     {
//         avt: "https://i.ibb.co/hccHgS6/spider.png",
//         trailerURL: "",
//         title: "",
//         duration: "",
//         releaseDate: "",
//         category: "",
//         description: ""
//     },

// ]
// const comingSoonData = [
//     {
//         avt: "https://i.ibb.co/hccHgS6/spider.png",
//         trailerURL: "",
//         title: "",
//         duration: "",
//         releaseDate: "",
//         category: "",
//         description: ""
//     },
//     {
//         avt: "https://i.ibb.co/hccHgS6/spider.png",
//         trailerURL: "",
//         title: "",
//         duration: "",
//         releaseDate: "",
//         category: "",
//         description: ""
//     },
//     {
//         avt: "https://i.ibb.co/hccHgS6/spider.png",
//         trailerURL: "",
//         title: "",
//         duration: "",
//         releaseDate: "",
//         category: "",
//         description: ""
//     },
//     {
//         avt: "https://i.ibb.co/hccHgS6/spider.png",
//         trailerURL: "",
//         title: "",
//         duration: "",
//         releaseDate: "",
//         category: "",
//         description: ""
//     },

// ]

const promoData = [
  {
    img: "https://i.ibb.co/W0dgBGf/Promo2.png",
    trailerURL: "",
    title: "",
    duration: "",
    releaseDate: "",
    category: "",
    description: "",
  },
  {
    img: "https://i.ibb.co/TtS3RTB/Promo.png",
    trailerURL: "",
    title: "",
    duration: "",
    releaseDate: "",
    category: "",
    description: "",
  },
];

const HomeTab = () => {
  const { dispatch, token } = useContext(AppContext);
  const [playingNowData, setPlayingNowData] = useState([]);
  const [comingSoonData, setComingSoonData] = useState([]);

  const axiosOptions = {
    headers: {
      "x-access-token": token,
    },
  };

  useEffect(() => {
    console.log(API_HOST);
    const getPlayingNow = async () => {
      try {
        const res = await axios.get(`${API_HOST}/api/movies/all`, axiosOptions);
        setPlayingNowData(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    const getComingSoon = async () => {
      try {
        const res = await axios.get(`${API_HOST}/api/movies/all`, axiosOptions);
        setComingSoonData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPlayingNow();
    getComingSoon();
  }, []);

  const navigation = useNavigation();
  const route = useRoute();

  // useEffect(() => {

  // }, [])
  return (
    <SafeAreaView>
      <View style={styles.background}>
        <ScrollView>
          <View style={styles.header}>
            <View style={styles.miniHeader}>
              <View style={styles.headerInfo}>
                <CustomText
                  textValue={"Hello "}
                  fontSize={24}
                  color={"#FFFFFF"}
                  fontFamily={"Poppins-SemiBold"}
                  secondTextValue={"Quang"}
                  secondColor={"white"}
                  secondFontFamily={"Poppins-Regular"}
                />

                <View style={styles.headerLocation}>
                  {/* Icon */}
                  <CustomText
                    textValue={"Thaibinh City"}
                    fontSize={14}
                    color={"#90A4AE"}
                    fontFamily={"Poppins-Regular"}
                  />
                  {/* Icon */}
                </View>
              </View>
              <View style={styles.avatar}>
                <AvatarButton imgSrc={UserLogo} width={56} height={56} />
              </View>
            </View>
            <View>{/* Search */}</View>
          </View>
          <View style={styles.content}>
            <View style={styles.playingNow}>
              <CustomText
                textValue={"Playing "}
                fontSize={24}
                color={"white"}
                fontFamily={"Poppins-Regular"}
                secondTextValue={"Now"}
                secondFontFamily={"Poppins-Medium"}
                marginLeft={24}
                marginBottom={3}
              />
              <FlatList
                data={playingNowData}
                horizontal={true}
                renderItem={({ item }) => (
                  <FilmButton
                    onPress={() =>
                      navigation.navigate("MovieDetail", {
                        item: item,
                        comingSoon: false,
                      })
                    }
                    imgSrc={{ uri: item.avt }}
                  />
                )}
              />
            </View>
            <View style={styles.promo}>
              <CustomText
                textValue={"Promo"}
                fontSize={24}
                color={"white"}
                fontFamily={"Poppins-Medium"}
                marginLeft={24}
                marginBottom={3}
              />
              <FlatList
                data={promoData}
                horizontal={true}
                renderItem={({ item }) => (
                  <PromoButton imgSrc={{ uri: item.img }} />
                )}
              />
            </View>
            <View style={styles.comeSoon}>
              <CustomText
                textValue={"Coming "}
                fontSize={24}
                color={"white"}
                fontFamily={"Poppins-Regular"}
                secondTextValue={"Soon"}
                secondFontFamily={"Poppins-Medium"}
                marginLeft={24}
              />
              <FlatList
                data={comingSoonData}
                horizontal={true}
                renderItem={({ item }) => (
                  <FilmButton
                    onPress={() =>
                      navigation.navigate("MovieDetail", {
                        item: item,
                        comingSoon: true,
                      })
                    }
                    imgSrc={{ uri: item.avt }}
                  />
                )}
              />
            </View>
          </View>
          <View style={styles.cache}></View>
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
  content: {},
  playingNow: {
    marginBottom: 20,
  },
  promo: {
    marginBottom: 20,
  },
  header: {
    height: 168,
    width: "100%",
  },
  comeSoon: {},
  headerLocation: {},
  headerInfo: {},
  miniHeader: {
    paddingTop: 46,
    paddingHorizontal: 32,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  avatar: {
    paddingTop: 5,
  },
  cache: {
    width: "100%",
    height: 50,
    backgroundColor: "#0F0F29",
  },
});
export default HomeTab;
