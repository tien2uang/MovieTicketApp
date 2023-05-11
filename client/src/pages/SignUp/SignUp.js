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
import { useContext, useState } from 'react';
import { SignUpSuccess } from '../../context/AppAction';
import { AppContext } from '../../context/AppContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';

import { API_HOST } from "@env";
const SignUp = () => {
    const [password, setPassword] = useState("");
    const [agreeTerm, setAgreeTerm] = useState(false);
    const [username, setUsername] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [warning, setWarning] = useState("");
    const { dispatch } = useContext(AppContext);
    const navigation = useNavigation();
    const signUp = async () => {
        const data = {
            password: password,
            isVerified: false,
            email: email,
            phone: phoneNumber,
            username: username
        }

        try {


            const res = await axios.post(`${API_HOST}/api/auth/signup`, data);
            const signupResponse = res.data;


            if (signupResponse.message == "User registered successfully. Please verify your email!") {
                setWarning("User registered successfully. Please verify your email!")
            }

        } catch (error) {

            let response = error.response.data;

            if (response.message == "Failed! Phone is already exists!") {
                setWarning(response.message);

            }

            if (response.message == "Failed! Email is already exists!") {
                setWarning(response.message);
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

                        <CustomText
                            textValue='Register'
                            fontSize={16} color={"#F5F5FA"}
                            fontFamily={"Poppins-SemiBold"}
                            marginBottom={12}
                        />
                        <CustomInput placeholder={"Username"} value={username} onChangeText={(val) => setUsername(val)} onFocus={() => { setWarning("") }} />
                        <CustomInput placeholder={"Email"} value={email} onChangeText={(val) => setEmail(val)} onFocus={() => { setWarning("") }} />
                        <CustomInput placeholder={"Password"} security={true} value={password} onChangeText={(val) => setPassword(val)} onFocus={() => { setWarning("") }} />
                        <CustomInput placeholder={"Confirm your password"} security={true} value={confirmPassword} onChangeText={(val) => setConfirmPassword(val)} onFocus={() => { setWarning("") }} />
                        <CustomInput placeholder={"Phone number"} value={phoneNumber} onChangeText={(val) => setPhoneNumber(val)} onFocus={() => { setWarning("") }} />


                        <CustomText textValue={warning}
                            fontSize={14} color={"#D77260"}
                            fontFamily={"Poppins-Medium"} />

                        <CustomButton
                            onPress={() => {
                                signUp();
                            }}
                            text='Register'
                            bgColor='#4838D1'
                            w={295}
                            color={"#EBEBF5"}
                            fontSize={16}
                            fontFamily={"Poppins-Medium"}
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
export default SignUp;