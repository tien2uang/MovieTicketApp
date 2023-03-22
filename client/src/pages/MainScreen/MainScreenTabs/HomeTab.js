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

const HomeTab = ()=>{
    const navigation = useNavigation();
    const route = useRoute();
    return (
        <SafeAreaView>

        <View style= {styles.background}>
            <ScrollView>
                <View style={styles.header}>
                    <View>
                        <CustomText textValue={"Hello Quang"}/>
                    </View>
                    <View>
                        {/* Icon */}
                        <CustomText textValue={"Hanoi"}/>
                        {/* Icon */}
                    </View>
                    <View>
                        <IconButton imgSrc={UserLogo} />
                    </View>
                </View>
                <View>
                    {/* Search */}
                </View>
                <View style= {styles.playingNow}>
                    <CustomText textValue={"Playing now"}/>
                    <FlatList
                    data={playingNowData}
                    horizontal={true}
                        renderItem ={({item}) => <FilmButton onPress={()=>navigation.navigate("MovieDetail",{item:item})}  imgSrc={item.img}/>}
                    
                    />

                    
                </View>
                <View style={styles.promo}>
                    <CustomText textValue={"Promo"}/>
                    <FlatList
                    data={promoData}
                    horizontal={true}
                        renderItem ={({item}) => <FilmButton  imgSrc={item.img} />}
                    
                    />
                </View>
                <View style={styles.comeSoon}>
                    <CustomText textValue={"Coming soon"}/>
                    <FlatList
                    data={comingSoonData}
                    horizontal={true}
                        renderItem ={({item}) => <FilmButton onPress={()=>navigation.navigate("MovieDetail",{item:item})}  imgSrc={item.img} />}
                    
                    />
                </View>

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
export default HomeTab;