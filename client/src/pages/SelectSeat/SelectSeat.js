// import CustomButton from "../../components/CustomButton";
// import CustomText from "../../components/CustomText";
// import IconButton from "../../components/IconButton";
// import NavigationBar from "../../components/NavigationBar";
// import UserLogo from "../../../assets/img/UserLogo.png";
// import FilmButton from "../../components/MainScreenComponents/FilmButton";
// import SpidermanLogo from "../../../assets/img/spider.png";
// import { useNavigation } from "@react-navigation/native";
// import { useRoute } from "@react-navigation/native";
// import { useContext } from "react";
// import { AppContext } from "../../context/AppContext";
// import { SelectSeatSuccess } from "../../context/AppAction";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   SafeAreaView,
//   FlatList,
//   ScrollView,
//   Button
// } from "react-native";
// import { vw, vh } from "react-native-css-vh-vw";

// const SelectSeat = () => {
//   const { dispatch } = useContext(AppContext);
//   const navigation = useNavigation();
//   const route = useRoute();
//   const item = route.params.item;
//   const handleSubmit = () => {
//     // dispatch(SelectSeatSuccess());
//     navigation.navigate("BookingDetail", { item: item });
//   };
//   return (
//     <SafeAreaView>
//       <View style={styles.background}>
//         <ScrollView>
//           <CustomText textValue={"Select Seat"} />
//           <Button
//             title="Back"
//             onPress={() => {
//               console.log("click");
//               navigation.goBack();
//             }}
//           />

//           <Button
//             title="Order"
//             onPress={() => {
//               handleSubmit();
//             }}
//           />
//           <CustomText textValue={"Cancel order"} />
//           <Button
//             title="Cancel"
//             onPress={() => {
//               navigation.goBack();
//             }}
//           />
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   );
// };

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ScrollView,
  Button,
} from "react-native";
import { vw, vh } from "react-native-css-vh-vw";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useContext, useEffect, useState, useLayoutEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { API_HOST, token } from "@env";
import { useFonts } from "expo-font";
import AntDesign from "react-native-vector-icons/AntDesign";
import axios from "axios";

const numStatusColumns = 3;
const numListSeats = 10;

const SelectSeat = () => {
  const { dispatch } = useContext(AppContext);
  const navigation = useNavigation();
  const route = useRoute();
  const itemRoute = route.params.item;

  const [numOfSeats, setNumOfSeats] = useState([]);
  const [seats, setSeats] = useState([]);
  const [movieInforTime, setMovieinforTime] = useState([]);
  const [dateTime, setDateTime] = useState([]);
  const [showtimeIDState, setShowTimeIDState] = useState("");
  const [timeSelected, setTimeSelected] = useState("");
  const [showtime, setShowtime] = useState([]);
  const [isSelectHour, setIsSelectHour] = useState(false);

  // console.log(itemRoute2);

  // const [fontLoader] = useFonts({
  //   Poppin900: require("../../../assets/fonts/PoppinsBlack900.ttf"),
  //   Poppin700: require("../../../assets/fonts/PoppinsBold700.ttf"),
  //   Poppin500: require("../../../assets/fonts/PoppinsMedium500.ttf"),
  //   Poppin400: require("../../../assets/fonts/PoppinsRegular400.ttf"),
  // });

  // if (!fontLoader) {
  //   return null;
  // }

  const axiosOptions = {
    headers: {
      "x-access-token": token,
    },
  };

  const renderStatusSelect = ({ item, index }) => (
    <View key={`status${index}`} style={styles.statusItem}>
      <View
        style={{
          width: 18,
          height: 18,
          backgroundColor: `${item.backgroundColor}`,
        }}
      ></View>
      <Text style={{ color: "#fff", fontSize: 14, marginLeft: 8 }}>
        {item.status}
      </Text>
    </View>
  );
  useEffect(() => {
    const getSeats = async () => {
      try {
        const result = await axios.get(
          `${API_HOST}/api/theaters/seats/T0001`,
          axiosOptions
        );
        setSeats(result.data);
      } catch {
        (error) => {
          // console.log(error);
        };
      }
    };
    const getInfoTimeMovie = async () => {
      try {
        const result = await axios.get(
          `${API_HOST}/api/movies/showtime/${
            itemRoute.movieID ? itemRoute.movieID : "M0001"
          }`,
          axiosOptions
        );
        if (result.data) {
          result.data.showtimes.map(async (showtime) => {
            const myDate = { myDate: showtime.date };
            const [year, month, day] = myDate.myDate.split("-");
            const resultTheater = await axios.get(
              `${API_HOST}/api/theaters/${showtime.theaterID}`,
              axiosOptions
            );
            const nameTheater = resultTheater.data.theater_name;
            setDateTime((prev) => [
              {
                showtimeID: showtime.showtimeID,
                time: showtime.time,
                nameTheater: nameTheater,
                theaterID: showtime.theaterID,
                day,
                month,
                year,
                date: showtime.date,
              },
              ...prev,
            ]);
          });
        }
      } catch {
        (error) => {
          // console.log(error);
        };
      }
    };
    getInfoTimeMovie();
    getSeats();
  }, []);
  const handleSelectSeats = (item) => {
    setNumOfSeats((prev) => [...prev, item]);
  };

  const handleUnSelectSeats = (itemValue) => {
    let array = [...numOfSeats];
    let index = array.indexOf(itemValue);
    if (index !== -1) {
      array.splice(index, 1);
      setNumOfSeats(array);
    }
  };
  const renderSeets = ({ item, index }) => {
    return (
      <View>
        {numOfSeats?.includes(item) ? (
          <View>
            <TouchableOpacity
              key={`seat4${index}`}
              style={
                item.includes("4")
                  ? styles.seatItemMiddleSelected
                  : styles.seatItemSelected
              }
              onPress={() => handleUnSelectSeats(item)}
            >
              <Text style={styles.seatTextSeleted}>{item}</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <TouchableOpacity
              key={`seat4${index}`}
              style={
                item.includes("4") ? styles.seatItemMiddle : styles.seatItem
              }
              onPress={() => handleSelectSeats(item)}
            >
              <Text style={styles.seatText}>{item}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  const handleSelectDate = (itemValue) => {
    setTimeSelected(itemValue.date);
    setShowtime([itemValue]);
    console.log(itemValue);
  };

  const handleUnSelectDate = () => {
    setTimeSelected("");
    setShowtime([]);
  };

  const renderDateList = ({ item, index }) => {
    return (
      <View>
        {timeSelected.includes(item.date) ? (
          <TouchableOpacity
            key={`dateSelected${index}`}
            style={styles.dateItemSelected}
            onPress={() => handleUnSelectDate()}
          >
            <Text key={`text1Selected${index}`} style={styles.dateTextSelected}>
              {item.day}/{item.month}
            </Text>
            <Text key={`text2Selected${index}`} style={styles.dateTextSelected}>
              {item.year}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            key={`date${index}`}
            style={styles.dateItem}
            onPress={() => handleSelectDate(item)}
          >
            <Text key={`text1${index}`} style={styles.dateText}>
              {item.day}/{item.month}
            </Text>
            <Text key={`text2${index}`} style={styles.dateText}>
              {item.year}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };
  const handleSubmitTicket = async () => {
    if (showtimeIDState && numOfSeats.length > 0) {
      console.log(numOfSeats, showtimeIDState);
      const result = await axios.post(
        `${API_HOST}/api/booking/create`,
        {
          showtimeID: showtimeIDState,
          seatID: numOfSeats,
          discountID: "D002",
        },
        axiosOptions
      );
      if (result.data.message === "Success!") {
        navigation.navigate("BookingDetail", { item: itemRoute });
        setNumOfSeats([]);
      } else {
        console.log("failed1");
        alert("Error to booking, waiting server!");
      }
      // navigation.navigate("BookingDetail", { item: itemRoute });
    } else {
      console.log("failed2");
      alert("Please select full information of movie!");
    }
  };

  const handleSelectHour = (itemValue) => {
    setShowTimeIDState(itemValue.showtimeID);
    setIsSelectHour(true);
    console.log(itemValue.showtimeID);
  };

  const handleUnSelectHour = () => {
    setIsSelectHour(false);
    setShowTimeIDState("");
  };

  const renderCinemaList = ({ item }) => (
    <View key={item.theaterID} style={styles.cinemaItem}>
      <Text style={styles.cinemaName}>{item.nameTheater}</Text>
      <View style={styles.cinemaTime}>
        {isSelectHour ? (
          <TouchableOpacity
            style={styles.cinemaTimeItemSelected}
            onPress={() => handleUnSelectHour()}
          >
            <Text style={styles.cinemaTimeTextSelected}>{item.time}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.cinemaTimeItem}
            onPress={() => handleSelectHour(item)}
          >
            <Text style={styles.cinemaTimeText}>{item.time}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  const renderFooterFlatList = () => {
    return <View style={{ height: 200 }}></View>;
  };

  return (
    <SafeAreaView>
      <View styles={styles.seetsContainer}>
        <View style={styles.selectContainer}>
          <View style={styles.headerTitle}>
            <AntDesign
              name="arrowleft"
              style={{ color: "white", fontSize: 20 }}
              onPress={() => {
                navigation.goBack();
              }}
            ></AntDesign>
            <Text style={styles.headerText}>SELECT SEETS</Text>
          </View>

          <View styles={styles.selectSeets}>
            <View style={styles.divider}></View>
            <View>
              <SafeAreaView>
                <FlatList
                  style={styles.seatsList}
                  renderItem={renderSeets}
                  data={seats}
                  key={"**"}
                  showsHorizontalScrollIndicator={false}
                  scrollEnabled={false}
                  numColumns={numListSeats}
                ></FlatList>
              </SafeAreaView>
            </View>

            <FlatList
              style={styles.statusList}
              data={[
                { status: "Available", backgroundColor: "#37474F" },
                { status: "Selected", backgroundColor: "#ECEFF1" },
                { status: "Reserved", backgroundColor: "#78909C" },
              ]}
              renderItem={renderStatusSelect}
              numColumns={numStatusColumns}
              key="#"
              keyExtractor={(item) => item.status}
              scrollEnabled={false}
            ></FlatList>
          </View>
        </View>

        <View style={styles.timeContainer}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 14,
              color: "#fff",
              lineHeight: 17,
              fontWeight: 700,
            }}
          >
            Select Date and Time
          </Text>

          <FlatList
            style={styles.dateList}
            data={dateTime}
            renderItem={renderDateList}
            key="_"
            keyExtractor={(item) => item.showtimeID}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          ></FlatList>

          <SafeAreaView>
            <FlatList
              style={styles.cinemaList}
              data={showtime}
              renderItem={renderCinemaList}
              key="+"
              keyExtractor={(item) => item.name}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={renderFooterFlatList}
            ></FlatList>
          </SafeAreaView>

          <View style={styles.orderTicket}>
            <TouchableOpacity>
              <Text style={styles.btnSubmit} onPress={handleSubmitTicket}>
                ORDER NOW
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  seetsContainer: {
    position: "relative",
    width: "100%",
  },
  //Select Container
  selectContainer: {
    width: "100%",
    paddingHorizontal: 25,
    height: vh(50),
    position: "relative",
    backgroundColor: "#263238",
  },
  //Header Title
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    // marginTop: 50,
  },
  headerText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 16,
    fontWeight: 500,
  },
  //Seats
  seatsList: {
    flexWrap: "wrap",
    flexDirection: "column",
    marginTop: 20,
    marginLeft: 14,
  },
  seatItem: {
    width: 18,
    height: 18,
    backgroundColor: "#37474F",
    marginHorizontal: 5,
    marginBottom: 4,
  },
  seatItemSelected: {
    width: 18,
    height: 18,
    backgroundColor: "#ECEFF1",
    marginHorizontal: 5,
    marginBottom: 4,
  },
  seatItemMiddle: {
    width: 18,
    height: 18,
    backgroundColor: "#37474F",
    marginLeft: 5,
    marginBottom: 4,
    marginRight: 40,
  },
  seatItemMiddleSelected: {
    width: 18,
    height: 18,
    backgroundColor: "#ECEFF1",
    marginLeft: 5,
    marginBottom: 4,
    marginRight: 40,
  },
  seatText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 9,
  },
  seatTextSeleted: {
    textAlign: "center",
    color: "#333",
    fontSize: 9,
  },
  //Divider
  divider: {
    width: "90%",
    backgroundColor: "#fff",
    height: 8,
    marginLeft: "auto",
    marginRight: "auto",
  },
  statusList: {
    flexDirection: "row",
    top: "10%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  statusItem: {
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  //Time Container
  timeContainer: {
    backgroundColor: "#37474F",
    paddingTop: 15,
    paddingBottom: 20,
    paddingHorizontal: 25,
  },
  //Button order
  orderTicket: {
    flex: 1,
    bottom: "45%",
    marginLeft: "auto",
    marginRight: "auto",
    zIndex: 3,
  },
  btnSubmit: {
    width: 146,
    height: 32,
    backgroundColor: "#fff",
    color: "#263238",
    lineHeight: 32,
    textAlign: "center",
  },
  //Date List
  dateList: {
    flexDirection: "row",
    width: "100%",
    marginTop: 18,
  },
  dateItem: {
    flexDirection: "column",
    borderColor: "#607D8B",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#455A64",
    paddingHorizontal: 6,
    paddingVertical: 10,
    marginRight: 8,
  },
  dateItemSelected: {
    flexDirection: "column",
    borderColor: "#ECEFF1",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#ECEFF1",
    paddingHorizontal: 6,
    paddingVertical: 10,
    marginRight: 8,
  },
  dateText: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 17,
    textAlign: "center",
  },
  dateTextSelected: {
    color: "#333",
    fontSize: 16,
    lineHeight: 17,
    textAlign: "center",
  },
  //Cinema
  cinemaList: {
    display: "flex",
    width: "100%",
    marginTop: 15,
    paddingBottom: 100,
    height: vh(50),
  },
  cinemaItem: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#607D8B",
    backgroundColor: "#455A64",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
  },
  cinemaName: {
    color: "#fff",
    lineHeight: 16,
    fontSize: 16,
  },
  cinemaTime: {
    marginTop: 16,
    flexDirection: "row",
    borderRadius: 8,
  },
  cinemaTimeItem: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#607D8B",
    backgroundColor: "#546E7A",
    paddingHorizontal: 6,
    paddingVertical: 6,
    marginRight: 8,
  },
  cinemaTimeItemSelected: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ECEFF1",
    backgroundColor: "#ECEFF1",
    paddingHorizontal: 6,
    paddingVertical: 6,
    marginRight: 8,
  },
  cinemaTimeText: {
    color: "#fff",
    fontSize: 16,
  },
  cinemaTimeTextSelected: {
    color: "#333",
    fontSize: 16,
  },
});

export default SelectSeat;
