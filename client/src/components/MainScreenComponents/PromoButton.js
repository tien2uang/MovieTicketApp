import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const PromoButton = ({ onPress, imgSrc }) => {
    const navigation = useNavigation();
    return (
        <Pressable
            style={[
                styles.container,

            ]}
            onPress={onPress}
        >
            <Image
                style={{ width: 320, height: 120 }}
                source={imgSrc}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 320,
        height: 120,
        borderRadius: 15,
        marginLeft: 24,
        overflow: 'hidden'

    }
})

export default PromoButton;