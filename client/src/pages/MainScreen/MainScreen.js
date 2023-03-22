import {
    FlatList,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomText from '../../components/CustomText';
import IconButton from '../../components/IconButton';
import NavigationBar from '../../components/NavigationBar';
import UserLogo from "../../../assets/img/UserLogo.png";
import FilmButton from '../../components/MainScreenComponents/FilmButton';
import SpidermanLogo from "../../../assets/img/spider.png";
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from './MainScreenTabs/HomeTab';
import SearchTab from "./MainScreenTabs/SearchTab";
import ProfileTab from './MainScreenTabs/ProfileTab';


const playingNowData= [
    {
        img:SpidermanLogo
    },
    {
        img:SpidermanLogo
    },
    {
        img:SpidermanLogo
    },
]

const comingSoonData= [
    {
        img:SpidermanLogo
    },
    {
        img:SpidermanLogo
    },
    {
        img:SpidermanLogo
    },
]
const promoData =[
    {
        img:SpidermanLogo
    },
    {
        img:SpidermanLogo
    },
    {
        img:SpidermanLogo
    },
]

const Tab = createBottomTabNavigator();
const MainScreen = ()=>{
    return (
        

        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{headerShown:false}}
        >
            <Tab.Screen
                name='Home'
                component={HomeTab}
                options={{
                    title:"Home"
                }}
            />
            <Tab.Screen
                name='Search'
                component={SearchTab}
                options={{
                    title:"Search"
                }}
            />
            <Tab.Screen
                name='Profile'
                component={ProfileTab}
                options={{
                    title:"Profile"
                }}
            />


        </Tab.Navigator>
        
        
    )
}
const styles = StyleSheet.create({
    background: {
        backgroundColor:"#0F0F29",
        width:"100%",
        height:"100%"
    },
    

    
})
export default MainScreen;