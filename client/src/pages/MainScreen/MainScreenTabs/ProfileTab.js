import {
    FlatList,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button
  } from 'react-native';
import CustomButton from '../../../components/CustomButton';
import CustomText from '../../../components/CustomText';
import IconButton from '../../../components/IconButton';
import NavigationBar from '../../../components/NavigationBar';
import UserLogo from "../../../../assets/img/UserLogo.png";
import FilmButton from '../../../components/MainScreenComponents/FilmButton';
import SpidermanLogo from "../../../../assets/img/spider.png";
import { useNavigation } from '@react-navigation/native';
import {useRoute} from "@react-navigation/native";



const ProfileTab = ()=>{
    const navigation = useNavigation();
    return (
        <View style= {styles.background}>
            
            <ScrollView>
                <Button
                title="Back"
                onPress={() => {
                navigation.goBack();
                }}
                />
                <CustomText textValue ={"Profile Tab"}/>
                <Button
                title="Profile"
                onPress={() => {
                navigation.navigate("Profile");
                }}
                />
                <Button
                title="Payment"
                onPress={() => {
                navigation.navigate("Payment");
                }}
                />
                <Button
                title="Wishlist"
                onPress={() => {
                navigation.navigate("Wishlist");
                }}
                />
                <Button
                title="Logout"
                onPress={() => {
                navigation.goBack();
                }}
                />

            </ScrollView>
            

        </View>
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
export default ProfileTab;