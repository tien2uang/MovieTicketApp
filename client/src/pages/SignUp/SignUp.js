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
            if (agreeTerm == false) {

                setWarning("Agree di ban oi");
            }

            else if (password != confirmPassword) {
                setWarning("Password khoong trung nhau");
            }
            else {

                const res = await axios.post(`${API_HOST}/api/auth/signup`, data);
                const signupResponse = res.data;


                if (signupResponse.message == "User registered successfully. Please verify your email!") {
                    setWarning("User registered successfully. Please verify your email!")
                }
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
                <Image
                    source={Logo}

                />
                <Text>Register</Text>
                <CustomInput placeholder={"Username"} value={username} onChangeText={(val) => setUsername(val)} onFocus={() => { setWarning("") }} />
                <CustomInput placeholder={"Email"} value={email} onChangeText={(val) => setEmail(val)} onFocus={() => { setWarning("") }} />
                <CustomInput placeholder={"Password"} value={password} onChangeText={(val) => setPassword(val)} onFocus={() => { setWarning("") }} />
                <CustomInput placeholder={"Confirm your password"} value={confirmPassword} onChangeText={(val) => setConfirmPassword(val)} onFocus={() => { setWarning("") }} />
                <CustomInput placeholder={"Phone number"} value={phoneNumber} onChangeText={(val) => setPhoneNumber(val)} onFocus={() => { setWarning("") }} />
                <CustomText textValue={warning} />
                <CustomButton
                    onPress={() => {
                        let currentValue = agreeTerm;

                        setAgreeTerm(!currentValue);
                    }}
                    text='By signing up, you agree to our Terms,
                Data Policy and Cookies Policy.'
                    bgColor='#FFFFFF'
                    fgColor='#F77A55'
                    w={295}
                    h={29}
                    align='flex-end'
                />
                <CustomButton
                    onPress={() => {
                        signUp();
                    }}
                    text='Register'
                    bgColor='#4838D1'
                    w={295}
                    h={56}
                    pad={15}
                />
                <CustomButton
                    onPress={() => { navigation.navigate("SignIn") }}
                    text='Cancel'
                    bgColor='#4838D1'
                    w={295}
                    h={56}
                    pad={15}
                />








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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    row2: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginLeft: 65,
        marginBottom: 16,
    },
    cache: {
        width: 375,
        height: 200,
        backgroundColor: '#FFFFFF'
    },
})
export default SignUp;