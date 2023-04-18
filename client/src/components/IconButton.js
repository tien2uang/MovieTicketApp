import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, Pressable } from 'react-native';

const IconButton = ({ onPress, imgSrc, backgroundColor, fgColor, width, height, borderColor, borderWidth, borderRadius }) => {
    return (
        <Pressable
            style={[
                styles.container,
                backgroundColor ? { backgroundColor: backgroundColor } : {},
                width ? { width: width } : {},
                height ? { height: height } : {},
                borderColor ? { borderColor: borderColor } : { borderColor: '#D5D5E3', },
                borderWidth ? { borderWidth: borderWidth } : { borderWidth: 1, },
                borderRadius ? { borderRadius: borderRadius } : { borderRadius: 8, },

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
        width: 87,
        height: 56,
        margin: 16,
        alignItems: 'center',

    },
})

export default IconButton;