import {
    FlatList,
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
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
import { PaySuccess } from '../../context/AppAction';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconButton2 from '../../components/IconButtonV2';
import axios from 'axios';
import { API_HOST } from "@env";
import ArrowLeft from "../../../assets/img/arrow-left.png";

const BookingDetail = () => {
    const { dispatch, token } = useContext(AppContext);
    const axiosOptions = {
        headers: {
            "x-access-token": token
        }
    }
    const [qrURL, setQrURL] = useState(undefined);
    const navigation = useNavigation();
    const route = useRoute();
    const bookingInfo = route.params.bookingInfo;
    const movieInfo = route.params.movieInfo;
    // useEffect(() => {
    //     const getBookingInfo = async () => {
    //         try {
    //             const res = await axios.get(`${API_HOST}/api/booking/details/${bookingID}`, axiosOptions);
    //             console.log(res.data);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }
    //     const getBookingQR = async () => {
    //         try {
    //             const res = await axios.get(`${API_HOST}/api/booking/details/qr/${bookingID}`, axiosOptions);
    //             console.log(res.data);
    //             setQrURL(res.data);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }
    //     getBookingInfo();
    //     getBookingQR();
    // }, [])

    const handleSubmit = () => {
        // dispatch(PaySuccess());
        navigation.navigate("TransactionDetail", { item: item });
    }
    return (
        <SafeAreaView>

            <View style={styles.background}>
                <ScrollView>
                    <View style={styles.header}>
                        <IconButton2 imgSrc={ArrowLeft} height={35} width={35} marginLeft={32} onPress={() => { navigation.goBack(); }} />
                        <CustomText textValue={"TICKET DETAIL"} fontSize={17} fontFamily={"Poppins-Medium"} color={"white"} marginLeft={9} paddingTop={4} />
                    </View>
                    <View style={styles.content}>
                        <View style={{ width: 160 }}>
                            <Image
                                source={{ uri: movieInfo.avt }}
                                style={
                                    {
                                        width: 160, height: 240,
                                        borderRadius: 24,
                                        overflow: 'hidden',
                                        marginBottom: 24,


                                    }
                                }
                            />
                        </View>
                        <CustomText marginBottom={24} textAlign={"center"} width={278} textValue={movieInfo.title.toUpperCase()} fontSize={17} fontFamily={"Poppins-Medium"} color={"white"} />
                        <CustomText textAlign={"center"} width={133} textValue={"22:00 | 18/2/2023"} fontSize={14} fontFamily={"Poppins-Regular"} color={"white"} />
                        <CustomText textAlign={"center"} width={180} textValue={"Cineplex 1"} fontSize={14} fontFamily={"Poppins-Regular"} color={"white"} />
                        <CustomText marginBottom={24} textAlign={"center"} width={180} textValue={bookingInfo.seats.toString()} fontSize={14} fontFamily={"Poppins-Regular"} color={"white"} />

                        <View style={styles.qrCode}>

                            <Image style={{ width: 148, height: 148, backgroundColor: "white", padding: 0, borderRadius: 8 }} source={{ uri: "data:image/png;base64,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" }} />
                        </View>
                        <Button
                            title="Back to Main"
                            onPress={() => {
                                navigation.navigate("MainScreen");
                            }}
                        />

                    </View>







                </ScrollView>


            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    background: {
        backgroundColor: "#0F0F29",
        width: "100%",
        height: "100%"
    },
    header: {
        marginTop: 21,

        flexDirection: "row",

        width: "100%",
        alignContent: "center",

        marginBottom: 24

    },
    content: {

        flexDirection: "column",
        alignItems: "center",
        width: 331,
        marginLeft: 32
    },
    qrCode: {
        marginBottom: 32

    }

})
export default BookingDetail;