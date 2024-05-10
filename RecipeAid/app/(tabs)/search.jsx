import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as ImagePicker from 'expo-image-picker';
import { SearchBar } from 'react-native-screens';

const Search = () => {

  return (
    <SafeAreaView className="h-full ">
        <ScrollView>
          <SearchBar placeholder="Search something..." />
        </ScrollView>
    </SafeAreaView>
)
}

export default Search