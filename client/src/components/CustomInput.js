import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

const CustomInput = ({ placeholder, value, onChangeText, onFocus, fontFamily, fontSize, color, security }) => {
    return (
        <View style={styles.container}>
            <TextInput placeholder={placeholder}
                placeholderTextColor={"#6A6A8B"}
                secureTextEntry={security ? security : false}
                style={[styles.input,
                fontFamily ? { fontFamily: fontFamily } : { fontFamily: "Poppins-Medium" },
                fontSize ? { fontSize: fontSize } : { fontSize: 14 },
                color ? { color: color } : { color: "#F5F5FA" }

                ]

                }
                value={value} onChangeText={onChangeText} onFocus={onFocus}
            />
        </View>
    );
};

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: '#1C1C4D',
            height: 53,
            width: 295,

            borderRadius: 8,
            paddingHorizontal: 24,
            paddingVertical: 16,
            marginBottom: 16,



        },
        input: {

            width: 220,
            lineHeight: 14
        },
    }
);

export default CustomInput;