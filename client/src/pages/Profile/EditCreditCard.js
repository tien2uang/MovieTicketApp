import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import CustomInput from "../../components/CustomInput";
import { useNavigation } from "@react-navigation/native";
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import { API_HOST, token } from "@env";

const EditCreditCard = () => {
  const navigation = useNavigation();
  // const { token } = useContext(AppContext);
  const route = useRoute();
  const item = route.params.item;

  const axiosOptions = {
    headers: {
      "x-access-token": token,
    },
  };

  const [creditCard, setCreditCard] = useState();
  const [warning, setWarning] = useState();

  const handelUpdate = async () => {
    console.log(creditCard);
    if (creditCard == undefined || creditCard == item.credit_card_number) {
      setWarning("Credit card has not changed");
    } else if (creditCard == "") {
      setWarning("Credit card invalid");
    }
    {
      const data = {
        old_credit_card: item.credit_card_number,
        new_credit_card: creditCard,
      };
      console.log(data);
      try {
        const res = await axios.put(
          `${API_HOST}/api/users/credit/edit`,
          data,
          axiosOptions
        );
        const Response = res.data;
        console.log(Response);
        alert("Thay đổi credit card thành công");
      } catch (error) {
        console.log("loi");
        let response = error.response.data;
        console.log(response);
      }
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.background}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.header}>Edit credit card</Text>
          </View>

          <View style={styles.body}>
            <View style={styles.item}>
              <Text style={styles.text}>Credit card</Text>
              <CustomInput
                defaultValue={item.credit_card_number}
                onFocus={() => setWarning("")}
                onChangeText={(text) => setCreditCard(text)}
              />
              <Text style={styles.warning}>{warning}</Text>
            </View>

            <View style={[styles.item, { marginTop: 10 }]}>
              <Text style={styles.text}>balance</Text>
              <CustomInput
                defaultValue={item.balance.toString()}
                editable={false}
              />
            </View>

            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <TouchableOpacity
                onPress={handelUpdate}
                style={{
                  width: 200,
                  height: 40,
                  backgroundColor: "#4838D1",
                  // marginTop: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 5,
                  marginBottom: 20,
                  marginRight: 40,
                }}
              >
                <Text style={{ color: "white", fontFamily: "Poppins-Regular" }}>
                  Update Credit Card
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
                style={{
                  width: 200,
                  height: 40,
                  backgroundColor: "#4838D1",
                  // marginTop: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 5,
                  marginBottom: 40,
                  marginRight: 40,
                }}
              >
                <Text style={{ color: "white", fontFamily: "Poppins-Regular" }}>
                  Back
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default EditCreditCard;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#0F0F29",
    width: "100%",
    height: "100%",
  },
  header: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontFamily: "Poppins-Regular",
    fontSize: 24,
  },
  body: {
    marginBottom: 40,
    padding: 15,
    marginLeft: 30,
  },
  text: {
    opacity: 0.5,
    marginBottom: 5,
    color: "white",
  },
  warning: {
    color: "red",
    fontFamily: "Poppins-Regular",
    position: "absolute",
    bottom: -7,
  },
});
