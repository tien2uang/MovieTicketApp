import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, Pressable } from 'react-native';
import CustomText from "./CustomText";
import { LinearGradient } from 'expo-linear-gradient';
import MasterCard from "../../assets/img/mastercardLogo.png";

const CreditCard = ({ onPress, text, name, cardNumber, expiredDate }) => {
    return (
        <Pressable
            onPress={onPress}
        >
            <View style={styles.container}>
                <LinearGradient
                    // Background Linear Gradient
                    colors={['rgba(0,0,0,0.8)', 'transparent']}
                    style={styles.background}
                />
                <Image source={MasterCard} width={34} height={21}
                    style={{ marginTop: 15, marginLeft: 16 }}
                />
                <View style={styles.content}>
                    <CustomText textValue={name} fontSize={13} color={"#F5F5FA"}
                        fontFamily={"JetBrainsMono-Regular"} marginBottom={4}
                    />
                    <CustomText textValue={cardNumber} fontSize={13} color={"#F5F5FA"}
                        fontFamily={"JetBrainsMono-Regular"} marginBottom={4}
                    />
                    <CustomText textValue={expiredDate} fontSize={13} color={"#F5F5FA"}
                        fontFamily={"JetBrainsMono-Regular"} marginBottom={8}
                    />
                </View>
            </View>



        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 270,
        height: 150,
        backgroundColor: "#199f95",
        borderRadius: 16,
        marginLeft: 32
    },
    content: {
        marginTop: 28,
        marginLeft: 20,


    }

})

export default CreditCard;