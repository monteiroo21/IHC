import React from 'react';
import GlobalProvider from '../context/GlobalProvider';
import { Stack } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RecipeScreen from '../components/recipeScreen.jsx';

const AppLayout = () => {
    return (
        <GlobalProvider>
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="RecipeScreen" component={RecipeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </GlobalProvider>
    );
};

export default AppLayout;
