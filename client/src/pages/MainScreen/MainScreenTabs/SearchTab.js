import {
    FlatList,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
import CustomButton from '../../../components/CustomButton';
import CustomText from '../../../components/CustomText';
import IconButton from '../../../components/IconButton';
import NavigationBar from '../../../components/NavigationBar';
import UserLogo from "../../../../assets/img/UserLogo.png";
import FilmButton from '../../../components/MainScreenComponents/FilmButton';
import SpidermanLogo from "../../../../assets/img/spider.png";
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';




const SearchTab = ()=>{
    const navigation = useNavigation();
    const route = useRoute();
    return (
        <SafeAreaView>

        <View style= {styles.background}>
            <ScrollView>
                <CustomText textValue ={"Search Tab"}/>
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
export default SearchTab;