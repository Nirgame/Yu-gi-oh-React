import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { Start } from "../screens/Start";
import { Cardslist } from "../screens/Cardslist";

const Stack = createNativeStackNavigator();

export const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Group>
                    <Stack.Screen name="Home" component={Start}/>
                    <Stack.Screen name="Cardslist" component={Cardslist}/>
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}