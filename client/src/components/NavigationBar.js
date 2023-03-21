import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, Pressable } from 'react-native';

const NavigationBar = (style) => {
    return (
       <View style={[
        styles.container,
        style ? style : {}
        ]}>

       </View>
        
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

export default NavigationBar;