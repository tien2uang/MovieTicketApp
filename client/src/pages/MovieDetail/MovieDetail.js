import {
    Image,

    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Button,
    View,
} from 'react-native';
import CustomText from '../../components/CustomText';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { useContext, useCallback, useState, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import { BookingStart } from '../../context/AppAction';
import { SafeAreaView } from 'react-native-safe-area-context';
import YoutubePlayer from "react-native-youtube-iframe";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Pressable } from 'react-native';
import CustomInput from '../../components/CustomInput';
import axios from 'axios';
import { API_HOST } from "@env";
import ArrowLeft from "../../../assets/img/arrow-left.png";
import IconButton from '../../components/IconButton';
import IconButton2 from '../../components/IconButtonV2';
import WebView from 'react-native-webview';





const extractVideoIDFromURL = (trailerURL) => {
    const splits = trailerURL.split('=');
    return splits[1];
}

const MovieDetail = () => {


    const { dispatch, token } = useContext(AppContext);
    const axiosOptions = {
        headers: {
            "x-access-token": token
        }
    }
    console.log(token)
    const navigation = useNavigation();
    const route = useRoute();
    const item = route.params.item;
    const comingSoon = route.params.comingSoon;
    const [playing, setPlaying] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [currentReview, setCurrentReview] = useState("");
    useEffect(() => {
        const getReviews = async () => {
            try {
                const res = await axios.get(`${API_HOST}/api/movies/review/${item.movieID}`, axiosOptions);
                console.log(res.data);
                setReviews(res.data);
            }
            catch (err) {
                console.log(err.response);
            }
        }

        getReviews();
        console.log(item)

    }, []);
    const postReview = async () => {
        const data = {
            movieID: item.movieID,
            review: currentReview
        }
        try {
            const res = await axios.put(`${API_HOST}/api/users/review`, data, axiosOptions);
            console.log(res.data);
            if (res.data.message == "Success") {
                setCurrentReview("");
                const res1 = await axios.get(`${API_HOST}/api/movies/review/${item.movieID}`, axiosOptions);
                setReviews(res1.data);

            }


        }
        catch (err) {
            console.log(err);
        }

    }

    const selectSeat = () => {
        dispatch(BookingStart());
        navigation.navigate("SelectSeat", { movieInfo: item });
    }
    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);
    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);
    return (
        <SafeAreaView>

            <View style={styles.background}>
                <ScrollView>
                    <View style={styles.a}>
                        <View style={[styles.header]}>

                            <IconButton2 imgSrc={ArrowLeft} height={35} width={35} marginLeft={32} />


                            <CustomText textValue={"MOVIE DETAIL"} fontSize={17} fontFamily={"Poppins-Medium"} color={"white"} marginLeft={9} paddingTop={4} />




                        </View>

                        <View style={[styles.main]}>
                            <View style={styles.left}>
                                <Image source={{ uri: item.avt }} style={styles.poster} />
                            </View>
                            <View style={styles.right} >
                                <View style={styles.box} >
                                    <Text style={styles.text_box}> <Icon name='th-large' style={{ fontSize: 20, color: '#FFFFFF' }} /> </Text>
                                    <CustomText textValue={"Category"} fontSize={12} color={"white"} />
                                    <CustomText textValue={item.category} fontSize={14} color={"white"} />

                                </View>
                                <View style={styles.box} >
                                    <Text style={styles.text_box}> <Icon name='clock-o' style={{ fontSize: 20, color: '#FFFFFF' }} /> </Text>
                                    <CustomText textValue={"Duration"} fontSize={12} color={"white"} />
                                    <CustomText textValue={item.duration} fontSize={14} color={"white"} />
                                </View>
                                <View style={styles.box} >
                                    <Text style={styles.text_box}> <Icon name='star' style={{ fontSize: 20, color: '#FFFFFF' }} /> </Text>
                                    <CustomText textValue={"Rating"} fontSize={12} color={"white"} />
                                    <CustomText textValue={"8.0"} fontSize={14} color={"white"} />
                                </View>
                            </View>
                        </View>
                        <View style={styles.container}>
                            <CustomText height={18} textValue={item.title.toUpperCase()} fontSize={16} color={"white"} fontFamily={"Poppins-SemiBold"} />

                            <View style={styles.rectangle}></View>
                        </View>
                        <View style={[styles.container, styles.synosis]}>
                            <CustomText textValue={"DESCRIPTION"} fontSize={16} color={"white"} fontFamily={"Poppins-SemiBold"} marginBottom={16} />

                            <CustomText textValue={item.description}
                                textAlign={"justify"}
                                fontSize={14}
                                color={"white"}
                                fontFamily={"Poppins-Regular"}
                                marginBottom={16}
                            />

                        </View>
                        <View style={[styles.container, styles.synosis]}>
                            <CustomText textValue={"TRAILER"} fontSize={16} color={"white"} fontFamily={"Poppins-SemiBold"} marginBottom={8} />
                            <View>
                                <YoutubePlayer

                                    height={240}
                                    play={playing}
                                    videoId={extractVideoIDFromURL(item.trailerURL)}
                                    onChangeState={onStateChange}
                                />

                            </View>

                        </View>
                        <View style={[styles.act, styles.container]}>
                            <Pressable style={styles.button} onPress={() => selectSeat()}>
                                <Text style={{ color: '#181818' }}>  Get Ticket </Text>
                            </Pressable>





                        </View>


                        <View>
                            <CustomInput placeholder={"Add review"} onChangeText={(val) => { setCurrentReview(val) }} />

                            <Button title={"Post"} onPress={() => postReview()} />

                            {reviews.map((review) =>

                                <View key={review.index} >
                                    <CustomText textValue={review.username} />
                                    <CustomText textValue={review.review} />
                                </View>

                            )}
                        </View>

                    </View>

                </ScrollView>


            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    a: {
        height: "100%",
        width: "100%",
        backgroundColor: '#263238',

    },
    container: {
        marginLeft: 32,
        marginRight: 32,
    },

    header: {
        marginTop: 21,
        flex: 1,

        width: "100%",
        alignContent: "center",

        flexDirection: "row",
        marginBottom: 32

    },
    text: {

        fontSize: 16,
        fontWeight: 500,
        marginTop: 10,
        textTransform: 'uppercase',
        color: '#FFFFFF'
    },
    main: {

        width: 328.7,
        height: 280,
        flexDirection: 'row',
        justifyContent: "space-between",
        marginLeft: 32,
        marginBottom: 24

    },
    left: {
        width: 210,
        height: 280,
    },
    poster: {
        flex: 0.6667,
        width: 210,
        height: 280,
        position: 'absolute',
        borderRadius: 20,
    },
    right: {
        width: 80,

    },
    box: {
        width: 80,
        height: 80,

        borderRadius: 16,
        borderColor: '#B0BEC5',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16

    },
    text_box: {
        color: '#FFFFFF',
        margin: 5,
        fontSize: 14,
    },
    rectangle: {
        width: '100%',
        backgroundColor: '#B0BEC5',
        marginTop: 20,
        height: 1.2,
        marginBottom: 8
    },
    synosis: {

    },
    content: {

        fontSize: 14.5,
        fontWeight: 400,
        marginTop: 40,
        position: 'absolute',
        width: '100%',
        textAlign: 'justify',
        color: '#FFFFFF',
    },
    act: {

        alignItems: 'center',

    },
    button: {
        height: 32,
        width: 132,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },

});
export default MovieDetail;