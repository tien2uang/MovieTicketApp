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
const ConfirmRegister = ()=>{
    return (
        <View style={styles.background} >
            <Image
                source={Logo}
            
            />
            <Text>Confirmation Code</Text>
            <CustomText
                textValue='Enter the confirmation code we sent to your email'
            />
            <CustomInput placeholder={"Confirmation Code"}/>
            
            
            <CustomButton
                onPress={''}
                text='Didn’t receive the code? Resend'
                bgColor='#FFFFFF'
                fgColor='#F77A55'
                w={295}
                h={29}
                align='flex-end'
            />
            <CustomButton
                onPress={() => {}}
                text='Submit'
                bgColor='#4838D1'
                w={295}
                h={56}
                pad={15}
            />
            <CustomButton
                onPress={() => {}}
                text='Cancel'
                bgColor='#4838D1'
                w={295}
                h={56}
                pad={15}
            />
           
            <View style={styles.cache}></View>


            
        </View>
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
export default ConfirmRegister;