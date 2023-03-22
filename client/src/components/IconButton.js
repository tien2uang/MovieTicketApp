import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, Pressable } from 'react-native';

const IconButton = ({ onPress, imgSrc, bgColor, fgColor }) => {
    return (
        <Pressable
            style={[
                styles.container,
                bgColor ? { backgroundColor: bgColor } : {}
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
        borderColor: '#4838D1',
        borderWidth: 2,
        borderRadius: 8,
    },
})

export default IconButton;