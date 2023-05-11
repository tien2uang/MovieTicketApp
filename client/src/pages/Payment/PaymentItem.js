import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import { API_HOST, token } from "@env";
import CustomText from "../../components/CustomText";

const PaymentItem = (props) => {
  // const { token } = useContext(AppContext);
  const axiosOptions = {
    headers: {
      "x-access-token": token,
    },
  };
  const movie = props.movieInfo;
  const [movieDetail, setMoiveDetail] = useState();
  const [theater, setTheater] = useState();

  console.log(movieDetail);
  // console.log(theater);

  const createdAtDate = new Date(movie.createdAt);
  const day = createdAtDate.getDate().toString().padStart(2, "0");
  const month = (createdAtDate.getMonth() + 1).toString().padStart(2, "0");
  const year = createdAtDate.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  useEffect(() => {
    // console.log("fetch");
    const getShowtime = async () => {
      try {
        const res = await axios.get(
          `${API_HOST}/api/showtimes/${movie?.showtimeID}`,
          axiosOptions
        );
        const Response = res.data;
        const movieID = Response.movieID;
        const theaterID = Response.theaterID;

        const movieDetail = await axios.get(
          `${API_HOST}/api/movies/details/${movieID}`,
          axiosOptions
        );
        const theater = await axios.get(
          `${API_HOST}/api/theaters/${theaterID}`,
          axiosOptions
        );
        console.log("movie detail", movieDetail.data);
        console.log("theater detail", theater.data);
        setMoiveDetail(movieDetail.data);
        setTheater(theater.data);
      } catch (error) {
        let response = error.response.data;
        console.log(response);
      }
    };
    getShowtime();
  }, []);

  return (
    <View>
      <View style={styles.item}>
        {/* <Text style={styles.nameOfFilm}>{movieDetail?.title}</Text> */}
        <CustomText
          textValue={movieDetail?.title}
          color={"white"}
          fontSize={22}
        />
        <View style={styles.info}>
          {movie.seatID.map((seat, index) => {
            return (
              <CustomText
                key={index}
                color={"white"}
                fontSize={15}
                textValue={seat}
              />
            );
          })}
        </View>

        <CustomText textValue={formattedDate} color={"white"} fontSize={14} />
        <CustomText
          textValue={theater?.theater_name}
          color={"white"}
          fontSize={14}
        />
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
    marginTop: 18,
  },
  nameOfTheater: {
    fontSize: 15,
    color: "white",
  },
  price: {
    position: "absolute",
    right: 0,
    top: 15,
    color: "white",
    fontWeight: 300,
    fontSize: 20,
    fontFamily: "Poppins-Regular",
  },
});
