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
import { SignUpSuccess } from '../../context/AppAction';
import { AppContext } from '../../context/AppContext';
const SignUp = ()=>{
    const {dispatch}= useContext(AppContext);
    const navigation = useNavigation();
    const handleSubmit = async ()=>{
        dispatch(SignUpSuccess());
        navigation.navigate("SignIn");
    }
    return (
        <SafeAreaView>

        <View style={styles.background} >
            <Image
                source={Logo}
            
            />
            <Text>Register</Text>
            <CustomInput placeholder={"Email"}/>
            <CustomInput placeholder={"Password"}/>
            <CustomInput placeholder={"Confirm your password"}/>
            <CustomInput placeholder={"Credit card number"}/>
            <CustomButton
                onPress={''}
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
                    handleSubmit();
                }}
                text='Register'
                bgColor='#4838D1'
                w={295}
                h={56}
                pad={15}
            />
            <CustomButton
                onPress={() => {navigation.navigate("SignIn")}}
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
export default SignUp;