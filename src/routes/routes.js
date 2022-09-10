import React from "react";

import Login from '../pages/Login';
import Home from '../pages/Home';
import Movie from "../pages/Movie";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Routes = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen 
                    options={{headerShown: false}}
                    name="Login" 
                    component={Login} 
                />
                <Stack.Screen 
                    options={{headerShown: false}}
                    name="Home" 
                    component={Home} 
                />
                <Stack.Screen 
                    options={{headerShown: false}}
                    name="Movie" 
                    component={Movie} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;