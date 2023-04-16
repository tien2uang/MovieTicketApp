import {
    Image,
    StyleSheet,
    Text,
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
import { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { LoginSuccess } from '../../context/AppAction';
import { useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import { API_HOST } from "@env";
import { ScrollView } from 'react-native-gesture-handler';

const SignIn = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [warning, setWarning] = useState("Warning");

    const { dispatch } = useContext(AppContext);
    const navigation = useNavigation();


    const signInWithGG = async () => {
        console.log("click");
        try {
            const res = await axios.get(`${API_HOST}/auth/google`);
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }

    const signIn = async () => {
        console.log("click")
        // navigation.navigate("MainScreen");
        const data = {
            email: email,
            password: password,

        }

        try {
            console.log("fetch");
            console.log(API_HOST)


            const res = await axios.post(`${API_HOST}/api/auth/signin`, data);
            const loginResponse = res.data;

            if (loginResponse.email == email) {


                dispatch(LoginSuccess(loginResponse));
                navigation.navigate("MainScreen");

            }


        }
        catch (error) {
            let response = error.response.data;

            if (response.message == "Invalid Password!") {
                setWarning("Password not correct")

            }

            if (response.message == "Email Not found!") {
                setWarning("Email not found!")
            }
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

                        <CustomText textValue={"Login to Your Account"} fontSize={16} color={"#F5F5FA"}
                            fontFamily={"Poppins-SemiBold"} marginBottom={16} marginLeft={8}
                        />
                        <CustomInput placeholder={"Email"} value={email} onChangeText={(val) => setEmail(val)} onFocus={() => { setWarning("") }} />
                        <CustomInput placeholder={"Password"} value={password} security={true} onChangeText={(val) => setPassword(val)} onFocus={() => { setWarning("") }} />
                        <CustomText textValue={warning}
                            fontSize={14} color={"#D77260"}
                            fontFamily={"Poppins-Medium"} />
                        <CustomButton
                            onPress={() => {
                                signIn()
                            }}
                            text='Login'
                            bgColor='#4838D1'
                            w={295}
                            color={"#EBEBF5"}
                            fontSize={16}
                            fontFamily={"Poppins-Medium"}
                            h={56}
                            pad={15}
                            marginBottom={16}
                        />
                        <CustomButton
                            onPress={() => navigation.navigate("ForgotPassword")}
                            text='Forgot Password ?'

                            color={"#7885FF"}
                            fontSize={14}
                            fontFamily={"Poppins-Medium"}
                            w={295}
                            h={29}
                            alignItems={"flex-end"}
                        />
                        <View style={styles.signInOption}>
                            <CustomText
                                textValue='Or login with'
                                fontSize={14} color={"#F5F5FA"}
                                fontFamily={"Poppins-Regular"}
                            />
                            <IconButton
                                onPress={() => { signInWithGG() }}
                                bgColor='#FFFFFF'
                                imgSrc={GoogleLogo}
                            />

                        </View>
                        <View style={styles.signUp}>

                            <CustomButton
                                onPress={() => navigation.navigate("SignUp")}
                                secondText={"Register"}
                                color={"#F5F5FA"}
                                text="Don't have an account? "
                                secondColor={"#7885FF"}
                                fontSize={14}
                                secondFontFamily={"Poppins-Medium"}
                                w={295}
                                h={29}
                            />
                        </View>
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
        marginLeft: 45

        // left: 40,
        // top: 204,



    },
    signInOption: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginTop: 8

    }

})
export default SignIn;