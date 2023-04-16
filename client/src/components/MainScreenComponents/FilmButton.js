import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const FilmButton = ({ onPress, imgSrc }) => {
    const navigation = useNavigation();
    return (
        <Pressable
            style={[
                styles.container,

            ]}
            onPress={onPress}
        >
            <Image
                style={{ width: 160, height: 240 }}
                source={imgSrc}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 160,
        height: 240,
        borderRadius: 15,
        marginLeft: 24,
        overflow: 'hidden'

    }
})

export default FilmButton;