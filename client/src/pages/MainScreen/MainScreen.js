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
import Ionicons from '@expo/vector-icons/Ionicons';



const playingNowData = [
    {
        img: SpidermanLogo
    },
    {
        img: SpidermanLogo
    },
    {
        img: SpidermanLogo
    },
]

const comingSoonData = [
    {
        img: SpidermanLogo
    },
    {
        img: SpidermanLogo
    },
    {
        img: SpidermanLogo
    },
]
const promoData = [
    {
        img: SpidermanLogo
    },
    {
        img: SpidermanLogo
    },
    {
        img: SpidermanLogo
    },
]

const Tab = createBottomTabNavigator();
const MainScreen = () => {
    return (


        <Tab.Navigator
            initialRouteName='Home'

            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarInactiveTintColor: "#BBB1FA",
                tabBarActiveTintColor: '#FFFFFF',
                tabBarStyle: {
                    backgroundColor: "#0F0F29",
                    borderTopWidth: 0

                },
                tabBarIcon: ({ color, size, focused }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Search') {
                        iconName = focused ? 'search' : 'search-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'library' : 'library-outline';
                    }

                    return <Ionicons name={iconName} size={24} color={color} />;
                },
            })}



        >
            <Tab.Screen
                name='Home'
                component={HomeTab}
                options={{
                    title: "Home",
                    // tabBarStyle: {
                    //     paddingBottom: 5
                    // }
                    tabBarLabelStyle: {
                        marginBottom: 1.5
                    }
                }}
            />
            <Tab.Screen
                name='Search'
                component={SearchTab}
                options={{
                    title: "Search",
                    tabBarLabelStyle: {
                        marginBottom: 1.5
                    }

                }}
            />
            <Tab.Screen
                name='Profile'
                component={ProfileTab}
                options={{
                    title: "Profile",
                    tabBarLabelStyle: {
                        marginBottom: 1.5
                    }
                }}
            />


        </Tab.Navigator>


    )
}
const styles = StyleSheet.create({
    background: {
        backgroundColor: "#0F0F29",
        width: "100%",
        height: "100%"
    },



})
export default MainScreen;