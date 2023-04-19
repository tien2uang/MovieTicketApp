import {
    Image,

    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

// import Logo from './assets/img/logo.png';
import Logo from '../../../assets/img/logo.png';
import GoogleLogo from '../../../assets/img/Google.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import CustomText from '../../components/CustomText';
import IconButton from '../../components/IconButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from "@react-navigation/native";
import { API_HOST } from '@env';
import axios from 'axios';
import { useState } from 'react';



const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const sendResetCode = async () => {
        const data = {
            email: email
        }
        try {
            // navigation.navigate("ConfirmResetCode", data);
            const res = await axios.post(`${API_HOST}/api/auth/forgotpassword`, data);
            if (res.data.message == "Please check your email for confirmation!") {
                console.log(res.data.message)
                navigation.navigate("ConfirmResetCode", data);
            }
        }
        catch (err) {
            console.log(err)
        }

    }

    const navigation = useNavigation();
    return (
        <SafeAreaView>

            <View style={styles.background} >
                <ScrollView>

                    <View style={styles.header}>
                        <Image
                            source={Logo}
                            style={{ width: 120, height: 120 }}

                        />
                    </View>
                    <View style={styles.content}>

                        <CustomText
                            textValue='Forgot Password'
                            fontSize={16} color={"#F5F5FA"}
                            fontFamily={"Poppins-SemiBold"}
                            marginBottom={12}
                        />
                        <CustomText
                            textValue='Please fill email and we will send you a code to get back into your account.'
                            fontSize={14} color={"#F5F5FA"}
                            fontFamily={"Poppins-Regular"}
                            marginBottom={12}
                        />
                        <CustomInput placeholder={"Email"} onChangeText={(val) => { setEmail(val) }} />


                        <CustomButton
                            onPress={() => {
                                sendResetCode();
                            }}
                            text={'Submit'}
                            bgColor='#4838D1'
                            color={"#EBEBF5"}
                            fontSize={16}
                            fontFamily={"Poppins-Medium"}
                            w={295}
                            h={56}
                            pad={15}
                            marginBottom={12}
                        />
                        <CustomButton
                            onPress={() => {
                                navigation.navigate("SignIn")
                            }}
                            text='Cancel'

                            color={"#EBEBF5"}
                            borderColor={"white"}
                            borderWidth={1}
                            fontSize={16}
                            fontFamily={"Poppins-Medium"}
                            w={295}
                            h={56}
                            pad={15}
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
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 180,
        width: '100%',
    },
    content: {
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
        // position: "absolute",
        width: 295,
        marginLeft: 45,
        marginTop: 20,

        // left: 40,
        // top: 204,



    },
})
export default ForgotPassword;