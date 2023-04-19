import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, Pressable } from 'react-native';

const IconButton2 = ({ onPress, imgSrc, backgroundColor, marginTop, fgColor, width, height, borderColor, borderWidth, borderRadius, marginLeft }) => {
    return (
        <Pressable
            style={[
                styles.container,
                backgroundColor ? { backgroundColor: backgroundColor } : {},
                width ? { width: width } : {},
                height ? { height: height } : {},
                marginLeft ? { marginLeft: marginLeft } : {},
                marginTop ? { marginTop: marginTop } : {},


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

    },
})

export default IconButton2;