import Header from "@/components/Header";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { vw, vh } from "react-native-css-vh-vw";

const Transaction = () => {
  const waitingPaymentData = [
    {
      nameMovie: "ESCAPE ROOM : TOURNAMENT OF CHAMPIONS",
      time: "21:00 WIB",
      date: "20 NOV 2021",
      cinema: "Transmart MX Mall XXI",
    },
    {
      nameMovie: "ESCAPE ROOM : TOURNAMENT OF CHAMPIONS",
      time: "21:00 WIB",
      date: "20 NOV 2021",
      cinema: "Transmart MX Mall XXI",
    },
    {
      nameMovie: "ESCAPE ROOM : TOURNAMENT OF CHAMPIONS",
      time: "21:00 WIB",
      date: "20 NOV 2021",
      cinema: "Transmart MX Mall XXI",
    },
  ];
  const renderInfoTransaction = ({ item }) => (
    <TouchableOpacity style={styles.transactionItem}>
      <Text style={styles.movieName}>{item.nameMovie}</Text>
      <View style={styles.transactionTime}>
        <Text style={styles.movieTime}>{item.time}</Text>
        <View style={styles.dividerVertical}></View>
        <Text style={styles.movieDate}>{item.date}</Text>
      </View>
      <Text style={styles.movieCinema}>{item.cinema}</Text>
      <View style={styles.borderBottom}></View>
    </TouchableOpacity>
  );

  const prevTransactionData = [
    {
      nameMovie: "ESCAPE ROOM : TOURNAMENT OF CHAMPIONS",
      time: "21:00 WIB",
      date: "20 NOV 2021",
      cinema: "Transmart MX Mall XXI",
    },
    {
      nameMovie: "ESCAPE ROOM : TOURNAMENT OF CHAMPIONS",
      time: "21:00 WIB",
      date: "20 NOV 2021",
      cinema: "Transmart MX Mall XXI",
    },
    {
      nameMovie: "ESCAPE ROOM : TOURNAMENT OF CHAMPIONS",
      time: "21:00 WIB",
      date: "20 NOV 2021",
      cinema: "Transmart MX Mall XXI",
    },
    {
      nameMovie: "ESCAPE ROOM : TOURNAMENT OF CHAMPIONS",
      time: "21:00 WIB",
      date: "20 NOV 2021",
      cinema: "Transmart MX Mall XXI",
    },
  ];

  return (
    <View>
      <Header fontWeightTransaction={600}></Header>
      <View style={StyleSheet.contentContainer}>
        <View style={styles.waitingPaymentList}>
          <Text style={styles.contentTitle}>Waiting for payment</Text>
          <FlatList
            data={waitingPaymentData}
            renderItem={renderInfoTransaction}
            showsVerticalScrollIndicator={false}
            key="_"
            keyExtractor={(index) => {
              index;
            }}
          ></FlatList>
        </View>

        <View style={styles.prevTransactionList}>
          <Text style={styles.contentTitle}>Previous Transaction</Text>
          <FlatList
            data={prevTransactionData}
            renderItem={renderInfoTransaction}
            showsVerticalScrollIndicator={false}
            key="+"
            keyExtractor={(index) => {
              index;
            }}
          ></FlatList>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 20,
  },
  contentTitle: {
    color: "white",
    fontSize: 16,
    marginLeft: 32,
    fontWeight: 500,
    marginBottom: 16,
    marginTop: 22,
  },
  //Waiting Payment List
  waitingPaymentList: {
    height: vh(35),
  },
  transactionItem: {
    paddingVertical: 16,
    paddingLeft: 48,
    paddingRight: 131,
    backgroundColor: "#37474F",
    position: "relative",
  },
  movieName: {
    color: "white",
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 14,
    marginBottom: 17,
  },
  transactionTime: {
    flexDirection: "row",
  },
  movieTime: {
    color: "white",
    fontSize: 12,
  },
  dividerVertical: {
    width: 1,
    height: "100%",
    backgroundColor: "white",
    marginHorizontal: 8,
  },
  movieDate: {
    color: "white",
    fontSize: 12,
  },
  movieCinema: {
    color: "white",
    fontSize: 12,
  },
  borderBottom: {
    // position: "fixed",
    width: "143%",
    height: 2,
    backgroundColor: "#607D8B",
    bottom: -16,
    left: -10,
  },
  //Previous Transaction List
  prevTransactionList: {
    height: vh(52),
  },
});

export default Transaction;
