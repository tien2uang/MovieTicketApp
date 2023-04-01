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
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { AppContext } from '../../../context/AppContext';
import { API_HOST } from "@env";
import axios from 'axios';
import PromoButton from '../../../components/MainScreenComponents/PromoButton';

// const playingNowData = [
//     {
//         img: "https://i.ibb.co/hccHgS6/spider.png",
//         trailerURL: "",
//         title: "",
//         duration: "",
//         releaseDate: "",
//         category: "",
//         description: ""
//     },

// ]

const comingSoonData = [
    {
        img: SpidermanLogo,
        trailerURL: "",
        title: "",
        duration: "",
        releaseDate: "",
        category: "",
        description: ""
    },
    {
        img: SpidermanLogo,
        trailerURL: "",
        title: "",
        duration: "",
        releaseDate: "",
        category: "",
        description: ""
    },
    {
        img: SpidermanLogo,
        trailerURL: "",
        title: "",
        duration: "",
        releaseDate: "",
        category: "",
        description: ""
    },
]
const promoData = [
    {
        img: "https://i.ibb.co/W0dgBGf/Promo2.png",
        trailerURL: "",
        title: "",
        duration: "",
        releaseDate: "",
        category: "",
        description: ""
    },
    {
        img: "https://i.ibb.co/TtS3RTB/Promo.png",
        trailerURL: "",
        title: "",
        duration: "",
        releaseDate: "",
        category: "",
        description: ""
    },




]

const HomeTab = () => {
    const { dispatch, token } = useContext(AppContext);
    const [playingNowData, setPlayingNowData] = useState([]);

    const axiosOptions = {
        headers: {
            "x-access-token": token
        }
    }

    useEffect(() => {
        const getMovie = async () => {

            const res = await axios.get(`${API_HOST}/api/movies/new`, axiosOptions);
            setPlayingNowData(res.data);
            console.log(res.data);
        }
        getMovie();
    }, [])

    const navigation = useNavigation();
    const route = useRoute();

    useEffect(() => {

    }, [])
    return (
        <SafeAreaView>

            <View style={styles.background}>
                <ScrollView>
                    <View style={styles.header}>
                        <View>
                            <CustomText textValue={"Hello Quang"} />
                        </View>
                        <View>
                            {/* Icon */}
                            <CustomText textValue={"Hanoi"} />
                            {/* Icon */}
                        </View>
                        <View>
                            <IconButton imgSrc={UserLogo} />
                        </View>
                    </View>
                    <View>
                        {/* Search */}
                    </View>
                    <View style={styles.playingNow}>
                        <CustomText textValue={"Playing now"} />
                        <FlatList
                            data={playingNowData}
                            horizontal={true}
                            renderItem={({ item }) => <FilmButton onPress={() => navigation.navigate("MovieDetail", { item: item })} imgSrc={{ uri: item.avt }} />}

                        />


                    </View>
                    <View style={styles.promo}>
                        <CustomText textValue={"Promo"} />
                        <FlatList
                            data={promoData}
                            horizontal={true}
                            renderItem={({ item }) => <PromoButton imgSrc={{ uri: item.img }} />}

                        />
                    </View>
                    <View style={styles.comeSoon}>
                        <CustomText textValue={"Coming soon"} />
                        <FlatList
                            data={comingSoonData}
                            horizontal={true}
                            renderItem={({ item }) => <FilmButton onPress={() => navigation.navigate("MovieDetail", { item: item })} imgSrc={item.img} />}

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
    playingNow: {

    },
    promo: {

    },
    header: {

    },
    comeSoon: {

    },


})
export default HomeTab;