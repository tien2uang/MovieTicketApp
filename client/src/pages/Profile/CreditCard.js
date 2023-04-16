import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import { API_HOST, token } from "@env";

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

  useEffect(() => {
    const getBalance = async () => {
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
    };
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
        setAddCreditCard(false);
      } catch (error) {
        let response = error.response.data;
        console.log(response);
      }
    }
  };

  return (
    <View style={styles.background}>
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
            <Text style={{ color: "white", fontSize: 15 }}>
              Bạn chưa có thẻ tín dụng nào
            </Text>
          </View>
        ) : (
          creditCardList?.map((item, index) => {
            return (
              <View key={index}>
                {edit ? (
                  <View style={styles.itemEdit}>
                    <Text style={styles.text}>Credit card {index + 1}</Text>
                    <TextInput
                      onChangeText={(text) => setCreditCard(text)}
                      defaultValue={item.credit_card_number}
                      style={styles.inputText}
                      keyboardType="number-pad"
                    />
                    <TouchableOpacity
                      onPress={() => {
                        handleUpdateCreditCard(item.credit_card_number);
                      }}
                    >
                      <Text style={styles.update}>update</Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={{ marginBottom: 10 }}>
                    <View style={styles.item}>
                      <Text
                        style={{
                          color: "white",
                          fontSize: 20,
                          fontWeight: 400,
                        }}
                      >
                        Credit card {index + 1}
                      </Text>

                      <Text
                        style={{ color: "white", fontSize: 15, marginTop: 15 }}
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
                        }}
                      >
                        {item.balance}$
                      </Text>
                      {/* <TouchableOpacity
                        onPress={() => {
                          setEdit(true);
                        }}
                      >
                        <Text
                          style={{
                            position: "absolute",
                            top: -30,
                            right: 15,
                            color: "white",
                            fontSize: 20,
                          }}
                        >
                          edit
                        </Text>
                      </TouchableOpacity> */}
                    </View>
                  </View>
                )}
              </View>
            );
          })
        )}

        {addCreditCard && (
          <View style={styles.itemEdit}>
            <Text style={styles.text}>Enter Credit card</Text>
            <TextInput
              onChangeText={(text) => setCreditCard(text)}
              placeholder=""
              style={styles.inputText}
              keyboardType="number-pad"
            />
            <TouchableOpacity onPress={handleAddCreditCard}>
              <Text style={styles.update}>add</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setAddCreditCard(false);
              }}
            >
              <Text style={styles.cancel}>cancel</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <Button title="Add Credit" onPress={() => setAddCreditCard(true)} />
      <Button
        style={{ marginTop: 10 }}
        title="Edit Credit"
        onPress={() => setEdit(true)}
      />
      {edit ? <Button title="Cancel" onPress={() => setEdit(false)} /> : <></>}

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
          }}
        >
          Back
        </Text>
      </TouchableOpacity>
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
  },

  body: {
    marginTop: 50,
    paddingHorizontal: 15,
  },

  itemEdit: {
    marginVertical: 10,
    // marginTop: 20,
  },
  text: {
    opacity: 0.5,
    marginBottom: 5,
    color: "white",
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
    right: 0,
    top: -55,
    opacity: 0.5,
  },
  cancel: {
    color: "white",
    position: "absolute",
    right: 0,
    top: -35,
    opacity: 0.5,
  },
  item: {
    paddingLeft: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#607D8B",
    paddingVertical: 10,
  },

  noCreditCard: {},
});
