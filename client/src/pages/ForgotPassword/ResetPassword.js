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
import { Alert } from 'react-native';


const ResetPassword = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const resetPwInfo = route.params.resetPwInfo;
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmPassword] = useState("");
    const [warning, setWarning] = useState("");

    const resetPassword = async () => {
        console.log("clcik")
        if (password == confirmedPassword) {

            const data = {
                email: resetPwInfo.email,
                code: resetPwInfo.code,
                password: password
            }
            console.log(data)
            try {

                const res = await axios.post(`${API_HOST}/api/auth/resetpassword`, data);
                console.log(res.data)
                if (res.data.message == "You have successfully change your password!") {
                    console.log(res.data.message)
                    Alert.alert(res.data.message);
                }
            } catch (err) {
                console.log(err)
            }
        }
        else {
            setWarning("Check your password");
        }

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
                            textValue='Reset Your Password'
                            fontSize={16} color={"#F5F5FA"}
                            fontFamily={"Poppins-SemiBold"}
                            marginBottom={12}
                        />
                        <CustomText
                            textValue={`Please enter your new password `}
                            fontSize={14} color={"#F5F5FA"}
                            fontFamily={"Poppins-Regular"}
                            marginBottom={12}

                        />
                        <CustomInput placeholder={"New Password"} onChangeText={(val) => {
                            setPassword(val)
                        }} onFocus={() => { setWarning('') }} security={true} />
                        <CustomInput placeholder={"Confirm New Password"} onChangeText={(val) => {
                            setConfirmPassword(val)
                        }} onFocus={() => { setWarning('') }} security={true} />
                        <CustomText
                            textValue={warning}
                            // textValue={"Wrong"}
                            fontSize={14} color={"#FF7F71"}
                            fontFamily={"Poppins-SemiBold"}
                            marginBottom={12}
                        />



                        <CustomButton
                            onPress={() => {
                                resetPassword();
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
export default ResetPassword;