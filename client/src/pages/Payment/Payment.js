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
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import PaymentItem from "./PaymentItem";

const Payment = () => {
  const { dispatch } = useContext(AppContext);
  const navigation = useNavigation();
  const data = [
    {
      movieID: 1,
      title: "The matrix",
      seat: "A22",
      date: "25/04/2024",
      theaterName: "MegaPlex",
      price: 120,
    },
    {
      movieID: 2,
      title: "The matrix 2",
      seat: "A01",
      date: "25/03/2024",
      theaterName: "MegaPlex",
      price: 120,
    },
    {
      movieID: 3,
      title: "The matrix 3",
      seat: "A30",
      date: "25/03/2024",
      theaterName: "MegaPlex",
      price: 120,
    },
  ];

  return (
    <SafeAreaView>
      <View style={styles.background}>
        <ScrollView>
          {/* <CustomText textValue={"Payment"} /> */}
          <View style={styles.header}>
            <Text style={styles.payment}>Payment</Text>
          </View>

          <View style={styles.body}>
            {data.map((item, index) => {
              return <PaymentItem key={index} movieInfo={item} />;
            })}
          </View>

          <Button
            title="Back"
            onPress={() => {
              console.log("click");
              navigation.goBack();
            }}
          />
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
