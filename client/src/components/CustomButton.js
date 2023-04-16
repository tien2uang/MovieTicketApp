import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, Pressable } from 'react-native';

const CustomButton = ({ onPress, text, justifyContent, bgColor, color, secondColor, w, h, pad, borderColor, borderWidth, alignItems, fontSize, marginBottom, fontFamily, secondText, secondFontFamily }) => {
    return (
        <Pressable
            style={[
                styles.container,
                bgColor ? { backgroundColor: bgColor } : {},
                w ? { width: w } : {},
                h ? { height: h } : {},
                pad ? { padding: pad } : {},
                borderColor ? { borderColor: borderColor } : {},
                borderWidth ? { borderWidth: borderWidth } : {},
                alignItems ? { alignItems: alignItems } : { alignItems: 'center' },
                justifyContent ? { justifyContent: justifyContent } : { justifyContent: 'center', },
                marginBottom ? { marginBottom: marginBottom } : {}


            ]}
            onPress={onPress}
        >
            <Text style={[
                fontFamily ? { fontFamily: fontFamily } : { fontFamily: 'Poppins-Regular' },
                { color: color },
                { fontSize: fontSize },

            ]}>
                {text}
                <Text style={[
                    { color: secondColor, fontFamily: secondFontFamily }
                ]}>
                    {secondText}
                </Text>
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {

        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },

})

export default CustomButton;