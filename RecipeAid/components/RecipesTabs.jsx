import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchIngredients from './SearchIngredients';  // Assume components are separated
import Vegetables from './Vegetables';  // New component for searching by name
import Proteins from './Proteins';

const Tab = createMaterialTopTabNavigator();

function RecipesTabs() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName="SearchIngredients"
        screenOptions={{
                tabBarActiveTintColor: '#ffffff',
                tabBarLabelStyle: { fontSize: 12 },
                tabBarStyle: {             backgroundColor: '#1E293B', // bg-slate-900 equivalent
                padding: 0, // Adjust padding as needed
                margin: 0, // Ensure no additional margin
                height: -30 // Adjust height if necessary to remove unwanted spac
            },
          tabBarIndicatorStyle: { backgroundColor: 'white' }
        }}
      >
        <Tab.Screen
          name="Vegetables"
          component={Vegetables}
          options={{ tabBarLabel: 'Vegetables' }}
        />
        <Tab.Screen
          name="Proteins"
          component={Proteins}
          options={{ tabBarLabel: 'Proteins' }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

export default RecipesTabs;