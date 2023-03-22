import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, Pressable } from 'react-native';

const CustomButton = ({ onPress, text, bgColor, fgColor, w, h, pad, bColor, bWidth, align, marginL }) => {
    return (
        <Pressable
            style={[
                styles.container,
                bgColor ? { backgroundColor: bgColor } : {},
                w ? {width: w} : {},
                h ? {height: h} : {},
                pad ? {padding: pad} : {},
                bColor ? {borderColor: bColor} : {},
                bWidth ? {borderWidth: bWidth} : {},
                align ? {alignSelf: align} : {},
            ]}
            onPress={onPress}
        >
            <Text style={[
                styles.text,
                fgColor ? {color: fgColor} : {},
            ]}>
                {text}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    text: {
        fontStyle: 'normal',
        color: 'white',
    }
})

export default CustomButton;