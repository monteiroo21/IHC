import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchIngredients from './SearchIngredients';  // Assume components are separated
import SearchByName from './SearchByName';  // New component for searching by name
import SearchUsers from './SearchUsers';  // New component for user search

const Tab = createMaterialTopTabNavigator();

function SearchTabs() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName="SearchIngredients"
        screenOptions={{
          tabBarActiveTintColor: '#ffffff',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: 'slateblue' },
          tabBarIndicatorStyle: { backgroundColor: 'white' }
        }}
      >
        <Tab.Screen
          name="Select Ingredients"
          component={SearchIngredients}
          options={{ tabBarLabel: 'Ingredients' }}
        />
        <Tab.Screen
          name="Search by Name"
          component={SearchByName}
          options={{ tabBarLabel: 'By Name' }}
        />
        <Tab.Screen
          name="Users"
          component={SearchUsers}
          options={{ tabBarLabel: 'Users' }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

export default SearchTabs;