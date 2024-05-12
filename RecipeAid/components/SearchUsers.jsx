import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, ScrollView, FlatList } from 'react-native'
import { ingredients, vegetables, proteins, users } from '../constants/data.js'
import IngredientsCard from './IngredientsCard.jsx'
import UsersCard from './UsersCard.jsx'

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
        </ScrollView>
    </SafeAreaView>
  );
}

export default SearchUsers;