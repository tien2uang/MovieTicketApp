import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, Pressable } from 'react-native';
import CustomText from "./CustomText";
import { LinearGradient } from 'expo-linear-gradient';
import MasterCard from "../../assets/img/mastercardLogo.png";
import UserLogo from "../../assets/img/UserLogo.png";

const Comment = ({ onPress, text, username }) => {
    return (
        <Pressable
            onPress={onPress}
        >
            <View style={styles.container}>

                <Image source={UserLogo} width={34} height={24}
                    style={{ marginTop: 15 }}
                />
                <View style={styles.content}>
                    <CustomText textValue={username} fontSize={17} color={"#F5F5FA"}
                        fontFamily={"Poppins-SemiBold"} marginBottom={4}
                    />
                    <CustomText textValue={text} fontSize={13} color={"#F5F5FA"}
                        fontFamily={"Poppins-Regular"} marginBottom={4}
                    />

                </View>
            </View>



        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    content: {
        marginTop: 15,
        marginLeft: 20,


    }

})

export default Comment;