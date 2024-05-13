import React from 'react';
import GlobalProvider from '../context/GlobalProvider';
import { Stack } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
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
            </GlobalProvider>
        </IngredientsProvider>
    );
};

export default AppLayout;
