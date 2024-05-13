import React from 'react';
import GlobalProvider from '../context/GlobalProvider';
import { Stack } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RecipeScreen from '../components/recipeScreen.jsx';
import { IngredientsProvider } from '../components/IngredientsContext';

const AppLayout = () => {
    return (
        <IngredientsProvider>
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
        </IngredientsProvider>
    );
};

export default AppLayout;
