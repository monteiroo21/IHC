import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, ScrollView, FlatList } from 'react-native'
import { ingredients, vegetables, proteins } from '../constants/data.js'
import IngredientsCard from './IngredientsCard.jsx'

function SearchUsers() {
    return (
        <SafeAreaView className="h-full bg-slate-900">
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text className="text-white">Settings!</Text>
            </View>
        </SafeAreaView>
    );
}

export default SearchUsers;