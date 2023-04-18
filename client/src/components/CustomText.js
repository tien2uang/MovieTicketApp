import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { useFonts } from 'expo-font';

const CustomText = ({ textAlign, width, height, textValue, fontSize, color, fontFamily, secondColor, secondFontFamily, secondTextValue, paddingTop, marginBottom, marginLeft, lineHeight, marginTop }) => {

    return (
        <Text style={[
            styles.text,
            { fontSize: fontSize },
            fontFamily ? { fontFamily: fontFamily } : { fontFamily: 'Poppins-Regular' },
            { color: color },
            marginBottom ? { marginBottom: marginBottom } : {},
            marginLeft ? { marginLeft: marginLeft } : {},
            lineHeight ? { lineHeight: lineHeight } : {},
            marginTop ? { marginTop: marginTop } : {},
            paddingTop ? { paddingTop: paddingTop } : {},
            width ? { width: width } : {},
            height ? { height: height } : {},
            textAlign ? { textAlign: textAlign } : {},
            { textAlignVertical: "center" }



        ]}>

            {textValue}
            <Text style={[
                fontFamily ? { fontFamily: secondFontFamily } : { fontFamily: 'Poppins-Regular' },
                { color: secondColor },
            ]}>
                {secondTextValue}
            </Text>
        </Text>
    )
}

const styles = StyleSheet.create(
    {

        text: {
            fontStyle: 'normal',
            fontSize: 16,
            color: '#2E2E5D'
        }
    }
);

export default CustomText;