import {
    FlatList,
    
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
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
import { BookingComplete } from '../../context/AppAction';
import { SafeAreaView } from 'react-native-safe-area-context';



const TransactionDetail = ()=>{
    const {dispatch}= useContext(AppContext);
    const navigation = useNavigation();
    const route = useRoute();

    const handleSubmit= ()=>{
            // dispatch(BookingComplete());
            navigation.navigate("MainScreen");
    }
    return (
        <SafeAreaView>

        <View style= {styles.background}>
            <ScrollView>
                <CustomText textValue={"Transaction Detail"}/>
                <Button
                title="Back to main screen"
                onPress={() => {
                    handleSubmit();
                }}
                />
                <CustomText textValue ={"Transaction Detail"}/>
            </ScrollView>
            

        </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    background: {
        backgroundColor:"#0F0F29",
        width:"100%",
        height:"100%"
    },
    playingNow: {

    },
    promo: {

    },
    header:{

    },
    comeSoon: {

    },

    
})
export default TransactionDetail;