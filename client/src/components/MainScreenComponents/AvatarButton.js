import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, Pressable } from 'react-native';

const AvatarButton = ({ onPress, imgSrc, backgroundColor, width, height }) => {
    return (
        <Pressable
            style={[
                styles.container,
                backgroundColor ? { backgroundColor: backgroundColor } : {},
                width ? { width: width } : {},
                height ? { height: height } : {},

            ]}
            onPress={onPress}
        >
            <Image
                source={imgSrc}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {


        alignItems: 'center',
        justifyContent: "center",

    },
})

export default AvatarButton;