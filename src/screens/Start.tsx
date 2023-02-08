import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";
import * as React from "react";
import { View, Image, StyleSheet, Pressable, Alert } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export function Start() {
    const navigation = useNavigation();
    const logoImages = require("../../assets/img/yugiohlogo.png")
    const startImages = require("../../assets/img/yugiohstart.png")

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <Image source={logoImages} style={styles.logo}/>

                <Pressable onPress={() => navigation.navigate("Cardslist")}>
                    <Image source={startImages} style={styles.logo}/>
                </Pressable>
            
            </View>
        </SafeAreaProvider>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingTop: Constants.statusBarHeight,
    },
    logo: {
        width: 'parent',
        height: 260
        
    },
  });