import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, ScrollView, FlatList } from 'react-native'
import { ingredients, vegetables, proteins } from '../constants/data.js'
import IngredientsCard from './IngredientsCard.jsx'
import SearchBar from './SearchBar.jsx'

function SearchByName() {
    return (
        <SafeAreaView className="h-full bg-slate-900">
            <SearchBar className="ml-4 mt-4 px-4" placeholder={"Search Recipe..."}></SearchBar>
        </SafeAreaView>
    );
}

export default SearchByName;