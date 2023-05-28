import {
    FlatList,

    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    Pressable,
    Button,
    View,
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomText from '../../components/CustomText';
import IconButton from '../../components/IconButton';
import NavigationBar from '../../components/NavigationBar';
import UserLogo from "../../../assets/img/UserLogo.png";
import FilmButton from '../../components/MainScreenComponents/FilmButton';
import SpidermanLogo from "../../../assets/img/spider.png";
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { SelectSeatSuccess } from '../../context/AppAction';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconButton2 from '../../components/IconButtonV2';
import { API_HOST } from "@env";
import axios from 'axios';
import CreditCard from '../../components/CreditCard';
import ArrowLeft from "../../../assets/img/arrow-left.png";
import CustomInput from '../../components/CustomInput';

const creditCardInfo = [
    {
        name: "NGUYEN TIEN QUANG",
        number: "1244 3213 3643 2721",
        expiredDate: "12/23"
    },
    {
        name: "NGUYEN TIEN QUANG",
        number: "1244 2122 3813",
        expiredDate: "12/24"
    },
]
const SelectCreditCard = () => {
    const { dispatch, token } = useContext(AppContext);
    const axiosOptions = {
        headers: {
            "x-access-token": token
        }
    }

    const calculatePrice = (seatCount) => {
        return seatCount * 25
    }
    const displaySeat = (seats) => {
        let seatString = "";
        for (let seat in seats) {
            seatString += (seat + ", ");
        }
        return seatString;
    }
    const navigation = useNavigation();
    const route = useRoute();

    const movieInfo = route.params.movieInfo;
    const bookingInfo = route.params.bookingInfo;
    console.log(movieInfo);

    console.log(bookingInfo);

    const [creditCards, setCreditCards] = useState(["35000321", "3213424"]);
    const [chosenCreditCard, setChosenCreditCard] = useState("None");
    const [discount, setDiscount] = useState("");
    const [price, setPrice] = useState(calculatePrice(bookingInfo.seatCount));


    // useEffect(() => {
    //     const getCreditCard = async () => {
    //         try {

    //             const res = await axios.get(`${API_HOST}/api/users/credit/get`, axiosOptions);
    //             const data = (res).data;
    //             setCreditCards(data.credit_card)
    //         } catch (err) {
    //             console.log(err.response.message)
    //         }

    //     }
    //     getCreditCard();
    // }, [])

    const confirmOrder = async () => {
        // navigation.navigate("BookingDetail", { bookingInfo: bookingInfo, movieInfo: movieInfo });

        const data = {
            bookingID: bookingInfo.bookingID,
            credit_card_number: "1231231231",
            seatNum: bookingInfo.seats.length
        }
        try {
            console.log(data)
            const res = await axios.put(`${API_HOST}/api/booking/confirm`, data, axiosOptions);
            console.log(res.data);
            const response = res.data;
            if (response.message.includes("Timeout")) {
                alert(response.message)
            }
            else {

                console.log("navigate")
                navigation.navigate("BookingDetail", { bookingInfo: bookingInfo, movieInfo: movieInfo });
            }

        } catch (err) {
            console.log(err)
        }
    }
    return (
        <SafeAreaView>

            <View style={styles.background}>
                <ScrollView>
                    <View style={styles.header}>
                        <IconButton2 imgSrc={ArrowLeft} height={35} width={35} marginLeft={32} onPress={() => { navigation.goBack(); }} />
                        <CustomText textValue={"CHECKOUT"} fontSize={17} fontFamily={"Poppins-Medium"} color={"white"} marginLeft={9} paddingTop={4} />
                    </View>

                    <CustomText textValue={"Select your card"} fontSize={16} color={"#F5F5FA"}
                        fontFamily={"Poppins-SemiBold"} marginBottom={16} marginLeft={32}
                    />

                    <View style={styles.cardSelection} >

                        <FlatList
                            data={creditCardInfo}
                            horizontal={true}
                            renderItem={({ item }) => <CreditCard onPress={() => setChosenCreditCard(item.number)} name={item.name} cardNumber={item.number} expiredDate={item.expiredDate} />}

                        />

                    </View>
                    <View style={styles.content}>


                        <View style={styles.cardSelected}>
                            <CustomText textValue={"Card Selected"} fontSize={14} color={"#F5F5FA"}
                                fontFamily={"Poppins-Regular"} marginBottom={14}
                            />
                            <CustomText textValue={chosenCreditCard} fontSize={14} color={"#6DBC9E"}
                                fontFamily={"Poppins-Regular"} marginBottom={14} marginTop={2}
                            />
                        </View>
                        <View style={styles.applyDiscount}>
                            <View style={styles.discountInput}>
                                <TextInput placeholder={"Discount"}
                                    placeholderTextColor={"#6A6A8B"}
                                    value={discount}
                                    onChangeText={(val) => {

                                        setDiscount(val)
                                    }}

                                    style={[styles.input,
                                    { fontFamily: "Poppins-Medium" },
                                    { fontSize: 14 },
                                    {
                                        color: "#F5F5FA",
                                        paddingLeft: 10
                                    }

                                    ]

                                    }

                                />
                            </View>
                            <Button title='Apply' onPress={() => {
                                if (discount == "discount1") {
                                    setPrice(price * 0.85);

                                }
                            }} />

                        </View>
                        <CustomText textValue={"Total"} fontSize={16} color={"#F5F5FA"}
                            fontFamily={"Poppins-SemiBold"} marginBottom={16}
                        />
                        <View style={styles.totalAmount}>
                            <View>

                                <CustomText textValue={movieInfo.title} fontSize={14} color={"#F5F5FA"}
                                    fontFamily={"Poppins-Regular"} marginBottom={14}
                                />
                                <CustomText textValue={bookingInfo.seats.toString()} fontSize={14} color={"#F5F5FA"}
                                    fontFamily={"Poppins-Regular"} marginBottom={14}
                                />
                            </View>
                            <CustomText height={20} textValue={price + " USD"} fontSize={18} color={"#F5F5FA"}
                                fontFamily={"Poppins-SemiBold"} marginBottom={14}
                            />
                        </View>


                        <Button
                            title="Pay"
                            onPress={() => {
                                confirmOrder();
                            }}
                        />

                    </View>




                </ScrollView>


            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    applyDiscount: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16
    },
    discountInput: {
        width: 250,
        paddingVertical: 5,
        backgroundColor: "#1C1C4D",
        borderColor: "gray",
        borderRadius: 3,
        borderWidth: 1

    },
    cardSelection: {
        marginBottom: 24
    },
    totalAmount: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    cardSelected: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },

    background: {
        backgroundColor: "#0F0F29",
        width: "100%",
        height: "100%"
    },
    playingNow: {

    },
    promo: {

    },
    header: {
        marginTop: 21,
        flex: 1,

        width: "100%",
        alignContent: "center",

        flexDirection: "row",
        marginBottom: 32

    },
    content: {
        width: 331,
        marginLeft: 32
    },
    comeSoon: {

    },


})
export default SelectCreditCard;