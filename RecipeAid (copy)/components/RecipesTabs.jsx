import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Vegetables from './Vegetables';  // New component for searching by name
import Proteins from './Proteins';
import Fruits from './Fruits';
import Cereals from './Cereals';
import { View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

function RecipesTabs() {
  return (
    <View>
      <Tab.Navigator
        initialRouteName="SearchIngredients"
        screenOptions={{
                tabBarActiveTintColor: '#ffffff',
                tabBarLabelStyle: { fontSize: 12 },
                tabBarStyle: {             backgroundColor: '#1E293B', // bg-slate-900 equivalent
                padding: 0, // Adjust padding as needed
                margin: 0, // Ensure no additional margin
                height: -4 // Adjust height if necessary to remove unwanted spac
            },
          tabBarIndicatorStyle: { backgroundColor: 'white' }
        }}
      >
        <Tab.Screen
          name="Vegetables"
          component={Vegetables}
          options={{ tabBarLabel: 'Vegetable' }}
        />
        <Tab.Screen
          name="Proteins"
          component={Proteins}
          options={{ tabBarLabel: 'Protein' }}
        />
        <Tab.Screen
          name="Fruits"
          component={Fruits}
          options={{ tabBarLabel: 'Fruit' }}
        />
        <Tab.Screen
          name="Cereals"
          component={Cereals}
          options={{ tabBarLabel: 'Cereal' }}
        />
      </Tab.Navigator>
    </View>
  );
}

export default RecipesTabs;