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
const SelectCreditCard = () => {
    const { dispatch } = useContext(AppContext);
    const navigation = useNavigation();
    const route = useRoute();
    const item = route.params.item;
    const handleSubmit = () => {
        // dispatch(SelectSeatSuccess());
        navigation.navigate("SelectSeat", { item: item });
    }
    return (
        <SafeAreaView>

            <View style={styles.background}>
                <ScrollView>
                    <CustomText textValue={"Select Credit Card"} />
                    <Button
                        title="Back"
                        onPress={() => {
                            console.log('click')
                            navigation.goBack();
                        }}
                    />

                    <Button
                        title="Order"
                        onPress={() => {
                            handleSubmit();
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
export default SelectCreditCard;