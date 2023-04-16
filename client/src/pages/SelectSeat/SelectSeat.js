import {
    FlatList,

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
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { SelectSeatSuccess } from '../../context/AppAction';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import { API_HOST } from "@env";
const SelectSeat = () => {
    let { dispatch, token } = useContext(AppContext);
    const navigation = useNavigation();
    const route = useRoute();
    const movieInfo = route.params.movieInfo;

    const axiosOptions = {
        headers: {
            "x-access-token": token
        }
    }
    const data = {

        showtimeID: "ST0017",
        seatID: ["S0010", "S0011", "S0012", "S0013"],
        discountID: "D002"
    }
    const booking = async () => {
        // navigation.navigate("SelectCreditCard", { movieInfo: movieInfo, bookingInfo: {} });
        try {

            const res = await axios.post(`${API_HOST}/api/booking/create`, data, axiosOptions);
            console.log(res.data);
            dispatch(SelectSeatSuccess());
            navigation.navigate("SelectCreditCard", { movieInfo: movieInfo, bookingInfo: res.data });

        }
        catch (err) {
            console.log(err.response.data);
        }


    }
    return (
        <SafeAreaView>

            <View style={styles.background}>
                <ScrollView>
                    <CustomText textValue={"Select Seat"} />
                    <Button
                        title="Back"
                        onPress={() => {
                            console.log('click')
                            navigation.goBack();
                        }}
                    />


                    <Button
                        title="Next"
                        onPress={() => {
                            booking();
                        }}
                    />
                    <CustomText textValue={"Cancel order"} />
                    <Button
                        title="Cancel"
                        onPress={() => {
                            navigation.navigate("MainScreen");
                        }}
                    />
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
    playingNow: {

    },
    promo: {

    },
    header: {

    },
    comeSoon: {

    },


})
export default SelectSeat;