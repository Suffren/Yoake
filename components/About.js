import React from "react";
import { StyleSheet, Text, View } from "react-native";
import mainStyle from '../Style';

export default function About() {
    return (
        <View style={styles.view, mainStyle['flx-center']}>
            <Text style={styles.title}>YOAKE</Text>
            <Text style={styles.japanText}>夜明け</Text>
            <Text style={styles.article}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        margin: 20
    },
    title: {
        fontSize: 22
    },
    japanText: {
        marginVertical: 20
    },
    article: {
        width: '60%'
    }
});