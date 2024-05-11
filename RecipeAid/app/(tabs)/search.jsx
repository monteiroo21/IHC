import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as ImagePicker from 'expo-image-picker';
import { SearchBar } from 'react-native-screens';
import Card from '../../components/Card';
import { ingredients, vegetables, proteins } from '../../constants/data';
import CardStandart from '../../components/CardStandart';
import IngredientsCard from '../../components/IngredientsCard';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function SearchIngredients() {
  const veg = vegetables;
  const pro = proteins;

  return (
    <SafeAreaView className="h-full bg-slate-900">
        <ScrollView>
          <FlatList
            data={veg}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
                <IngredientsCard
                    title={item.title}
                    image={item.image}
                />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
                />
          <Text className="text-white">PROTEINS</Text>
          <FlatList
            data={pro}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
                <IngredientsCard
                    title={item.title}
                    image={item.image}
                />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
                />
        </ScrollView>
    </SafeAreaView>
  );
}

function SearchName() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function SearchUser() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const Search = () => {
  return (
      <Tab.Navigator className="bg-slate-900">
        <Tab.Screen name="Search by Ingredients" component={SearchIngredients} />
        <Tab.Screen name="Search by Name" component={SearchName} />
        <Tab.Screen name="Search Users" component={SearchUser} />
      </Tab.Navigator>
  );
}

export default Search