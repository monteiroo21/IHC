import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ingredients, vegetables, proteins } from '../constants/data.js'
import IngredientsCard from './IngredientsCard.jsx'
import RecipesTabs from './RecipesTabs.jsx'

function SearchIngredients() {
  const veg = vegetables;
  const pro = proteins;

  return (
    <View className="h-full bg-slate-900">
        <ScrollView>
          <RecipesTabs></RecipesTabs>
        </ScrollView>
    </View>
  );
}

export default SearchIngredients;