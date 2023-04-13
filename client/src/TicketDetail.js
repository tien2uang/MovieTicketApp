import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

function TicketDetail() {

    const [isVisivle, setIsVisible] = useState(false)

    const showModalCancel = () => {
        setIsVisible(true);
    }
    
    const hideModalCancel = () => {
        setIsVisible(false);
    }


  return (
    <View>
      <View style={styles.ticketDetailContainer}>
        <View style={styles.headerTitle}>
          <AntDesign
            name="arrowleft"
            style={{ color: "white", fontSize: 16 }}
          ></AntDesign>
          <Text style={styles.headerText}>TICKET DETAIL</Text>
        </View>
        <View style={styles.movieInfo}>
          <Image
            style={styles.movieDetailImage}
            source={require("@/assets/images/shang_chi.png")}
          ></Image>
          <Text style={styles.movieName}>
            SHANG-CHI AND THE LEGEND OF THE TEN RINGS
          </Text>
          <View style={styles.movieTime}>
            <Text style={styles.movieText}>09:00</Text>
            <View style={styles.dividerVerticle}></View>
            <Text style={styles.movieText}>18 NOV 2021</Text>
          </View>
          <Text style={styles.movieCinema}>Transmart MX Mall XXI</Text>
          <Text style={[styles.movieSeet, styles.movieCinema]}>E8 ; E7</Text>
        </View>
        <Image
          style={styles.qrPayment}
          source={require("@/assets/images/qr_payment.png")}
        ></Image>

        <TouchableOpacity style={styles.btnCancel} onPress = {showModalCancel}>
          <Text style={{ color: "white", fontSize: 14, fontWeight: 500 }}>
            Cancel Order
          </Text>
        </TouchableOpacity>
      </View>

      <Modal visible={isVisivle} animationType="fade">
        <View styles={styles.modalContainer}>
          <Text style={styles.modalTitle}>
            Do you want to cancel the order ?
          </Text>
          <View style={styles.modalBtn}>
            <Button title="Yes" />
            <Button title="No" onPress = {hideModalCancel} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  //Ticket Detail Container
  ticketDetailContainer: {
    width: "100%",
    paddingHorizontal: 40,
  },
  //Header Title
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 16,
    fontWeight: 500,
  },
  //Movie Info
  movieInfo: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  movieDetailImage: {
    width: 164,
    height: 240,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 10,
    marginBottom: 20,
  },
  movieName: {
    color: "white",
    textAlign: "center",
    fontWeight: 600,
    fontSize: 16,
    paddingHorizontal: 8,
    marginBottom: 18,
  },
  movieTime: {
    flexDirection: "row",
    justifyContent: "center",
  },
  movieText: {
    color: "white",
    textAlign: "center",
    fontSize: 12,
    marginBottom: 2,
  },
  dividerVerticle: {
    width: 1,
    height: "100%",
    backgroundColor: "white",
    marginHorizontal: 4,
  },
  movieCinema: {
    color: "white",
    textAlign: "center",
    fontSize: 14,
  },
  movieSeet: {},
  qrPayment: {
    width: 148,
    height: 148,
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 26,
  },
  //Button Cancel
  btnCancel: {
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#263238",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderWidth: 1,
    borderColor: "#FFF",
    borderRadius: 10,
  },
  //Modal
  modalContainer: {
    alignItem: "center",
    justifyContent: "center",
    width: "80%",
    backgroundColor: "red",
    flexDirection: "column",
    padding: 24,
    position: "fixed",
    bottom: 300,
  },
  modalTitle: {},
  modalBtn: {},
});

export default TicketDetail;
