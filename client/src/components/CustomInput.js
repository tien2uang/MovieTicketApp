import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

const CustomInput = ({placeholder,ref}) => {
    return (
        <View style={styles.container   }>
            <TextInput placeholder={placeholder} style={styles.input} ref={ref} />
        </View>
    );
};

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: '#1C1C4D',
            width: 295,
            height:53,
            borderRadius: 8,
            paddingHorizontal: 10,
            marginBottom: 16,

        },
        input: {
            marginLeft: 14,
        },
    }
);

export default CustomInput;