import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as ImagePicker from 'expo-image-picker';

const Search = () => {
  return (
    <SafeAreaView className="bg-gray-200 h-full">
      <ScrollView>
        <View>
          <Text className="text-3xl">Buscar</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Search