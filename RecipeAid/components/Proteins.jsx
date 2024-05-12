import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ingredients, vegetables, proteins } from '../constants/data.js'
import IngredientsCard from './IngredientsCard.jsx'
import RecipesTabs from './RecipesTabs.jsx'

function Proteins() {
  const pro = proteins;

  return (
    <SafeAreaView className="h-full bg-slate-900">
        <ScrollView>
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
            <Text className="text-xl mt-2 ml-4 text-white">List of Ingredients: </Text>
        </ScrollView>
    </SafeAreaView>
  );
}

export default Proteins;