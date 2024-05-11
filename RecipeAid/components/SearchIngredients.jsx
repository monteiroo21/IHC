import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ingredients, vegetables, proteins } from '../constants/data.js'
import IngredientsCard from './IngredientsCard.jsx'

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

export default SearchIngredients;