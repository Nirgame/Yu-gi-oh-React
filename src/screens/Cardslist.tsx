import React from "react";
import {
  ImageBackground, 
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  FlatList,
} from "react-native";
import { Card, Text } from "react-native-paper";
import { useQuery } from "@tanstack/react-query";
import { List } from "react-content-loader";

import { fetchData } from "../hooks/UseCard";

const Cards = ({ cards }: any) => {
    const { name, type, race, card_images} = cards;
    const card_image = card_images[0].image_url_cropped
    return (
      <Card style={styles.Card}>
        <Card.Title title={name} />
        <Card.Content>
          <Text variant="bodyMedium">type : {type}</Text>
          <Text variant="bodyMedium">race : {race}</Text>
        </Card.Content>
        <View style={styles.cardpic}>
            <Card.Cover source={card_image} style={styles.imagecard}/>
        </View>
      </Card>
    );
  };

export const Cardslist = () => {
    const { isLoading, isError, data } = useQuery(["starships"], fetchData);

    if (isLoading) {
        
      console.log("loading");
      return (
        <ImageBackground source={require("../../assets/img/wallpaper.png")} style={styles.wallpaper}>
            <List />
        </ImageBackground>
        );
    }
    if (isError) {
      return <Text>Something bad happened…</Text>;
    }
    console.log(data);
    return (
      <SafeAreaView style={styles.safeContainer}>
        <ImageBackground source={require("../../assets/img/wallpaper.png")} style={styles.wallpaper}>
            <FlatList
            data={data.data}
            renderItem={({ item }) => <Cards cards={item} />}
            />
        </ImageBackground>
      </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    safeContainer: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    Card: {
      margin: 10,
    },
    imagecard: {
        height: 200,
        width: "70%",
    },
    cardpic: {
        textAlign: "center",
        paddingLeft: '20%',
    },
    wallpaper: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    }
  });