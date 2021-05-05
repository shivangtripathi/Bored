import React, { Component } from 'react';
import { Easing, Animated, SafeAreaView,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
    
    Home,
    
    Splash,

    TypeSelection


} from './screens';

const Stack = createStackNavigator();


function BaseStack() {
    return (
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ gestureEnabled: true }}>
            <Stack.Screen
                name="TypeSelection"
                component={TypeSelection}
                options={{ headerShown: false, animationEnabled: false,animationTypeForReplace:'pop'}}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: true, animationEnabled: false ,animationTypeForReplace:'pop',title:''}}
            />
            <Stack.Screen
                name="Splash"
                component={Splash}
                options={{ headerShown: false, animationEnabled: false }}
            />
        </Stack.Navigator>
    );
}


export default function App() {
    return (
        <NavigationContainer>
            <BaseStack />
        </NavigationContainer>
    );
}
