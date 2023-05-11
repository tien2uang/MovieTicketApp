import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  View,
} from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomText from "../../components/CustomText";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import PaymentItem from "./PaymentItem";
import axios from "axios";
import { API_HOST, token } from "@env";

const Payment = () => {
  // const { token } = useContext(AppContext);
  const navigation = useNavigation();
  const axiosOptions = {
    headers: {
      "x-access-token": token,
    },
  };

  const [payment, setPayment] = useState([]);
  // console.log(payment);

  useEffect(() => {
    console.log("fetch");
    const getPaymentHistory = async () => {
      try {
        const res = await axios.get(
          `${API_HOST}/api/users/booking/history`,
          axiosOptions
        );
        const Response = res.data;
        setPayment(Response);
      } catch (error) {
        let response = error.response.data;
        console.log(response);
      }
    };
    getPaymentHistory();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.background}>
        <ScrollView>
          <View style={styles.header}>
            <CustomText textValue={"Payment"} color={"white"} fontSize={24} />
          </View>

          <View style={styles.body}>
            {payment?.map((item, index) => {
              return <PaymentItem key={index} movieInfo={item} />;
            })}
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <CustomButton
              onPress={() => {
                navigation.goBack();
              }}
              text="Back"
              bgColor="#4838D1"
              w={295}
              h={56}
              pad={15}
            />
          </View>
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
  payment: {
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
});
export default Payment;
