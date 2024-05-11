import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as ImagePicker from 'expo-image-picker';
import { SearchBar } from 'react-native-screens';
import Card from '../../components/Card';
import { ingredients, vegetables, proteins } from '../../constants/data';
import CardStandart from '../../components/CardStandart';
import IngredientsCard from '../../components/IngredientsCard';
import Ingredient from '../../components/Ingredient';

const Search = () => {
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
          <Text className="text-white">HEY</Text>
          {veg.map((ingredient, index) => (
            <Ingredient key={index} name={ingredient} />
          ))}
        </ScrollView>
    </SafeAreaView>
)
}

export default Search