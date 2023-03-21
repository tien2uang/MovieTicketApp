import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

const CustomText = ({ textValue, weight, marginVer, align, marginL }) => {
    return (
        <Text style={[
            styles.text,
            { textAlign: 'left' }, 
            marginVer ? { marginBottom: marginVer} : {},
            marginL ? {marginLeft: marginL} : {},
            align ? {alignSelf: align} : {}
        ]}>
            {textValue}
        </Text>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            width: 295,
            height: 8,
        },
        text: {
            fontStyle: 'normal',
            fontSize: 16,
            color: '#2E2E5D'
        }
    }
);

export default CustomText;