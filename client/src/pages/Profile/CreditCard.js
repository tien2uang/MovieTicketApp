import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import { API_HOST, token } from "@env";
import CustomButton from "../../components/CustomButton";
import CreditCard2 from "../../components/CreditCard";
import CustomInput from "../../components/CustomInput";

const CreditCard = () => {
  // const { token } = useContext(AppContext);
  const navigation = useNavigation();
  const axiosOptions = {
    headers: {
      "x-access-token": token,
    },
  };

  const [creditCardList, setCreditCardList] = useState([]);

  const [creditCard, setCreditCard] = useState(-1);
  const [addCreditCard, setAddCreditCard] = useState(false);
  const [edit, setEdit] = useState(false);

  const getBalance = useCallback(async () => {
    try {
      const result = await axios.get(
        `${API_HOST}/api/users/balance`,
        axiosOptions
      );
      console.log(result.data);
      setCreditCardList(result.data);
    } catch (error) {
      console.log("fetch looix");
      let response = error.response.data;
      console.log(response);
    }
  }, []);

  useEffect(() => {
    console.log("fetch");
    getBalance();
  }, []);

  const handleUpdateCreditCard = async (oldCard) => {
    if (creditCardList.includes(creditCard) || creditCard == -1) {
      alert("credit chưa thay đổi");
    } else {
      const data = {
        old_credit_card: oldCard,
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
        let response = error.response.data;
        console.log(response);
      }
    }
  };

  const handleAddCreditCard = async () => {
    if (creditCardList.includes(creditCard)) {
      alert("da co card nay roi");
    } else if (creditCard == -1) {
      alert("ban chưa điền gì cả");
    } else {
      const data = {
        credit_card: creditCard,
      };
      try {
        const res = await axios.put(
          `${API_HOST}/api/users/credit/add`,
          data,
          axiosOptions
        );
        const Response = res.data;
        console.log(Response);
        alert("Thêm credit card thành công");
        getBalance();
        setAddCreditCard(false);
      } catch (error) {
        let response = error.response.data;
        console.log(response);
      }
    }
  };

  return (
    <View style={styles.background}>
      <ScrollView>
        <View style={styles.headerWrap}>
          <Text style={styles.header}>Credit card</Text>
        </View>

        <View style={styles.body}>
          {creditCardList?.length == 0 ? (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 15,
                  fontFamily: "Poppins-Regular",
                }}
              >
                Bạn chưa có thẻ tín dụng nào
              </Text>
            </View>
          ) : (
            creditCardList?.map((item, index) => {
              return (
                <View key={index}>
                  <View style={{ marginBottom: 10 }}>
                    {/* <View style={styles.item}>
                      <Text
                        style={{
                          color: "white",
                          fontSize: 20,
                          fontWeight: 400,
                          fontFamily: "Poppins-Regular",
                        }}
                      >
                        Credit card {index + 1}
                      </Text>
                      <Text
                        style={{
                          color: "white",
                          fontSize: 15,
                          marginTop: 0,
                          fontFamily: "Poppins-Regular",
                        }}
                      >
                        {item.credit_card_number}
                      </Text>
                      <Text
                        style={{
                          position: "absolute",
                          top: 15,
                          right: 15,
                          color: "white",
                          fontSize: 15,
                          fontFamily: "Poppins-Regular",
                        }}
                      >
                        {item.balance}$
                      </Text>
                    </View> */}
                    {/* EditCreditCard */}
                    <CreditCard2
                      name={"Credit card " + `${index + 1}`}
                      cardNumber={item.credit_card_number}
                      expiredDate={item.balance + "$"}
                      onPress={() => {
                        console.log("click");
                        navigation.navigate("EditCreditCard", { item: item });
                      }}
                    />
                  </View>
                </View>
              );
            })
          )}

          {addCreditCard && (
            <View style={styles.itemEdit}>
              <Text style={styles.text}>Enter Credit card</Text>
              <CustomInput
                placeholder={"Credit card"}
                keyboardType="number-pad"
                onChangeText={(text) => setCreditCard(text)}
              />
              <TouchableOpacity onPress={handleAddCreditCard}>
                <Text style={styles.update}>Add</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setAddCreditCard(false);
                }}
              >
                <Text style={styles.cancel}>Cancel</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {!addCreditCard ? (
          <TouchableOpacity
            onPress={() => setAddCreditCard(true)}
            style={{
              width: 200,
              height: 40,
              backgroundColor: "#4838D1",
              // marginTop: 20,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
              marginLeft: 100,
              marginBottom: 40,
            }}
          >
            <Text style={{ color: "white", fontFamily: "Poppins-Regular" }}>
              Add Credit Card
            </Text>
          </TouchableOpacity>
        ) : (
          <></>
        )}

        <TouchableOpacity
          onPress={() => {
            console.log("bakc");
            navigation.goBack();
          }}
          // title="bakc"
          style={{
            position: "absolute",
            color: "white",
            top: 40,
            left: 20,
          }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "Poppins-Regular",
            }}
          >
            Back
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CreditCard;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#0F0F29",
    width: "100%",
    height: "100%",
    // flex: 1,
  },
  headerWrap: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    color: "white",
    fontSize: 25,
    fontWeight: 400,
    fontFamily: "Poppins-Regular",
  },

  body: {
    marginTop: 30,
    paddingHorizontal: 25,
  },

  itemEdit: {
    marginVertical: 10,
    // marginTop: 20,
  },
  text: {
    opacity: 0.5,
    marginBottom: 5,
    color: "white",
    fontFamily: "Poppins-Regular",
  },
  inputText: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: "#607D8B",
    color: "white",
    marginBottom: 10,
  },
  update: {
    color: "white",
    position: "absolute",
    right: 10,
    top: -70,
    opacity: 0.5,
    fontFamily: "Poppins-Regular",
  },
  cancel: {
    color: "white",
    position: "absolute",
    right: -10,
    top: -40,
    opacity: 0.5,
    fontFamily: "Poppins-Regular",
  },
  item: {
    paddingLeft: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#607D8B",
    paddingVertical: 10,
  },

  noCreditCard: {},
});
