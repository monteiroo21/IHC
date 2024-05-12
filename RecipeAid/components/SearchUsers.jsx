import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, ScrollView, FlatList } from 'react-native'
import { ingredients, vegetables, proteins, users } from '../constants/data.js'
import IngredientsCard from './IngredientsCard.jsx'
import UsersCard from './UsersCard.jsx'
import SearchBar from './SearchBar.jsx'

function SearchUsers() {
    const user = users;

    return(
    <SafeAreaView className="h-full bg-slate-900">
        <ScrollView>
            <Text className="text-2xl text-white font-extrabold mb-4 ml-20 px-2">Recommended Chefs</Text>
            <FlatList
                data={user}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => (
                    <UsersCard
                        name={item.name}
                        image={item.image}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            <SearchBar className="ml-4 mt-4 px-4" placeholder={"Search User..."}>
            </SearchBar>
        </ScrollView>
    </SafeAreaView>
  );
}

export default SearchUsers;