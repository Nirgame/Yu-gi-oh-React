import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";
import * as React from "react";
import { ImageBackground, View, Image, StyleSheet, Pressable } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export function Start() {
    const navigation = useNavigation();
    const logoImages = require("../../assets/img/yugiohlogo.png")
    const startImages = require("../../assets/img/yugiohstart.png")

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <ImageBackground source={require("../../assets/img/wallpaper.png")} style={styles.wallpaper}>
                    <Image source={logoImages} style={styles.logo}/>

                    <Pressable onPress={() => navigation.navigate("Cardslist")}>
                        <Image source={startImages} style={styles.logo}/>
                    </Pressable>
                </ImageBackground>
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
    wallpaper: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    }
  });