import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import { API_HOST } from "@env";

const PaymentItem = (props) => {
  const { token } = useContext(AppContext);
  const axiosOptions = {
    headers: {
      "x-access-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlF1eWV0IiwiZW1haWwiOiIyMDAyMDQ2N0B2bnUuZWR1LnZuIiwiaWF0IjoxNjgwMzY0OTM5LCJleHAiOjE2ODA0NTEzMzl9.XXZJj2AKx2i1nw_T0B-j5VzspvJDlm_sCLpe9N0fuy4",
    },
  };
  const movie = props.movieInfo;

  const createdAtDate = new Date(movie.createdAt);
  const day = createdAtDate.getDate().toString().padStart(2, "0");
  const month = (createdAtDate.getMonth() + 1).toString().padStart(2, "0");
  const year = createdAtDate.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  // const [theater, setTheater] = useState();

  // console.log(theater);
  // useEffect(() => {
  //   const getTheaterHistory = async () => {
  //     try {
  //       const res = await axios.get(
  //         `${API_HOST}/api/users/booking/history`,
  //         axiosOptions
  //       );
  //       const Response = res.data;
  //       setTheater(Response);
  //     } catch (error) {
  //       let response = error.response.data;
  //       console.log(response);
  //     }
  //   };
  //   getTheaterHistory();
  // }, []);

  return (
    <View>
      <View style={styles.item}>
        <Text style={styles.nameOfFilm}>name of film</Text>
        <View style={styles.info}>
          <Text style={{ color: "white", fontSize: 15 }}>seat</Text>
          <Text style={{ color: "white", fontSize: 15 }}>{formattedDate}</Text>
        </View>
        <Text style={styles.nameOfTheater}>theater</Text>
        <Text style={styles.price}>{movie.price}$</Text>
      </View>
    </View>
  );
};

export default PaymentItem;

const styles = StyleSheet.create({
  item: {
    paddingLeft: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#607D8B",
    paddingVertical: 10,
  },
  nameOfFilm: {
    fontWeight: 400,
    color: "white",
    fontSize: 25,
  },
  info: {
    flexDirection: "row",
    alignContent: "space-between",
    gap: 10,
    marginTop: 25,
  },
  nameOfTheater: {
    fontSize: 15,
    color: "white",
  },
  price: {
    position: "absolute",
    right: 0,
    top: 10,
    color: "white",
    fontWeight: 300,
    fontSize: 25,
  },
});
