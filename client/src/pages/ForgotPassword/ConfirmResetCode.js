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

import { useNavigation } from '@react-navigation/native';
import { useRoute } from "@react-navigation/native";
import axios from 'axios';
import { API_HOST } from '@env';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


const ConfirmResetCode = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const email = route.params.email;
    // const email = "20020116@vnu.edu.vn";
    const [resetCode, setResetCode] = useState("");
    const resendCode = async () => {
        try {
            const res = await axios(`${API_HOST}/api/auth/forgotpassword`, { email: email });
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    const submitCode = async () => {
        const data = {
            email: email,
            code: resetCode
        }
        navigation.navigate("ResetPassword", { resetPwInfo: data })

    }
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
                            textValue='Confirmation Code'
                            fontSize={16} color={"#F5F5FA"}
                            fontFamily={"Poppins-SemiBold"}
                            marginBottom={12}
                        />
                        <CustomText
                            textValue={`Enter the confirmation code we sent to `}
                            fontSize={14} color={"#F5F5FA"}
                            fontFamily={"Poppins-Regular"}
                            secondTextValue={email}
                            secondFontFamily={"Poppins-SemiBold"}
                            marginBottom={12}
                        />
                        <CustomInput placeholder={"Reset Code"} onChangeText={(val) => {
                            setResetCode(val)
                        }} />


                        <CustomButton
                            onPress={() => {
                                resendCode();
                            }}
                            text='Didn’t receive the code? '
                            color={"#F5F5FA"}
                            fontSize={14}
                            secondText={"Resend"}
                            secondColor={"#F77A55"}
                            secondFontFamily={"Poppins-SemiBold"}
                            w={295}
                            h={29}
                            alignItems='flex-start'
                            marginBottom={12}

                        />
                        <CustomButton
                            onPress={() => {
                                submitCode();
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
export default ConfirmResetCode;