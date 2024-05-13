import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { ingredients, vegetables, proteins } from '../constants/data.js'
import IngredientsCard from './IngredientsCard.jsx'

function Vegetables() {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const handleSelectIngredient = (ingredient) => {
    if (selectedIngredients.includes(ingredient)) {
      // Ingredient exists, remove it
      setSelectedIngredients(selectedIngredients.filter(item => item !== ingredient));
    } else {
      // Ingredient does not exist, add it
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

  const veg = vegetables;

  return (
    <SafeAreaView className="h-full bg-slate-900">
        <ScrollView>
          <FlatList
            data={veg}
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
              <Text key={index} style={{ fontSize: 16, marginLeft: 16, marginTop: 4, color: 'white' }}>
                {ingredient}
              </Text>
            ))}
        </ScrollView>
    </SafeAreaView>
  );
}

export default Vegetables;