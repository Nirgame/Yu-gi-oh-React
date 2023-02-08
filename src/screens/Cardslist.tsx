import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  FlatList,
} from "react-native";
import { Card, Text } from "react-native-paper";
import { useQuery } from "@tanstack/react-query";
import { List } from "react-content-loader";

import { fetchData } from "../hooks/useCard";

const Cards = ({ cards }: any) => {
    const { name, type, race, card_images} = cards;
    // const result = card_images.map()
    // console.log(result)
    return (
      <Card style={styles.Card}>
        <Card.Title title={name} />
        <Card.Content>
          <Text variant="bodyMedium">type : {type}</Text>
          <Text variant="bodyMedium">race : {race}</Text>
        </Card.Content>
        {/* <Card.Cover source={card_images} style={styles.imagecard}/> */}
      </Card>
    );
  };

export const Cardslist = () => {
    const { isLoading, isError, data } = useQuery(["starships"], fetchData);

    if (isLoading) {
      console.log("loading");
      return <List />;
    }
    if (isError) {
      return <Text>Something bad happened…</Text>;
    }
    console.log(data);
    return (
      <SafeAreaView style={styles.safeContainer}>
        <FlatList
          data={data.data}
          renderItem={({ item }) => <Cards cards={item} />}
        />
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
        height: 50,
        width: 50,
    }
  });