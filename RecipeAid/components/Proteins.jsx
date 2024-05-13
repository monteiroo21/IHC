import { View, Text, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ingredients, vegetables, proteins } from '../constants/data.js'
import IngredientsCard from './IngredientsCard.jsx'
import { icons } from '../constants/icons.js';
import { useIngredients } from './IngredientsContext.jsx';

function Proteins() {
  const { selectedIngredients, handleSelectIngredient } = useIngredients();
  const pro = proteins;

  return (
    <SafeAreaView className="h-full bg-slate-900">
        <ScrollView>
          <FlatList
            data={pro}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSelectIngredient(item.title)}>
                <IngredientsCard
                  title={item.title}
                  image={item.image}
                />
              </TouchableOpacity>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
                />
            <Text className="text-xl mt-2 ml-4 text-white">List of Ingredients: </Text>
            {selectedIngredients.map((ingredient, index) => (
              <View key={index} className="flex-row mt-2 border-2 border-gray-400 h-8 w-28 ml-5 rounded-lg align-middle">
                <Text className="ml-2 mt-1 mr-4 text-white">{ingredient}</Text>
                  <TouchableOpacity onPress={() => handleSelectIngredient(ingredient)}>
                      <Image source={icons.x} tintColor={"#fff"} resizeMode='contain' className="h-3 w-3 mt-2 ml-3" />
                  </TouchableOpacity>
              </View>
            ))}
        </ScrollView>
    </SafeAreaView>
  );
}

export default Proteins;