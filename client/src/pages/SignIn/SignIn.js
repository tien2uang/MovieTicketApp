import {
    Image,
    SafeAreaView,
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
import {useRoute} from "@react-navigation/native";
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { LoginSuccess } from '../../context/AppAction';



const SignIn = ()=>{
    const data ={
        user:"Quang"
    }
    const {dispatch}= useContext(AppContext);
    const navigation = useNavigation();
    const handleSubmit= ()=>{
        console.log("click")
        dispatch(LoginSuccess(data));
        navigation.navigate("MainScreen");
    }
    return (
        <SafeAreaView>
        <View style={styles.background} >
            <Image
                source={Logo}
                
                />
            <Text>Login to Your Account</Text>
            <CustomInput placeholder={"Email"}/>
            <CustomInput placeholder={"Password"}/>
            <CustomButton
                onPress={() => {
                    handleSubmit()
                }}
                text='Login'
                bgColor='#4838D1'
                w={295}
                h={56}
                pad={15}
            />
            <CustomButton
                onPress={()=> navigation.navigate("ForgotPassword")}
                text='Forgot Password ?'
                bgColor='#FFFFFF'
                fgColor='#F77A55'
                w={295}
                h={29}
                align='flex-end'
            />
            <CustomText
                textValue='Or login with'
            />
            <View style={styles.row}>
                <IconButton
                    onPress={''}
                    bgColor='#FFFFFF'
                    imgSrc={GoogleLogo}
                />
                
            </View>
            <View style={styles.row}>
                <CustomText
                    textValue='Bạn chưa có tài khoản ? '
                />
                <CustomButton
                    onPress={()=> navigation.navigate("SignUp")}
                    text='Đăng ký tại đây'
                    bgColor='#FFFFFF'
                    fgColor='#F77A55'
                    w={100}
                    h={21}
                />
            </View>
            


            
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
export default SignIn;