import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as ImagePicker from 'expo-image-picker';
import { SearchBar } from 'react-native-screens';
import Card from '../../components/Card';
import { ingredients } from '../../constants/data';

const Search = () => {
  const ing = ingredients[0];

  return (
    <SafeAreaView className="h-full bg-slate-900">
        <ScrollView>
          <Text>HEY</Text>
          <FlatList
            data={ing}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
                <Card
                    title={item.title}
                    image={item.image}
                />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
                />
        </ScrollView>
    </SafeAreaView>
)
}

export default Search