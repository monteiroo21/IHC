import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, ScrollView, FlatList } from 'react-native'
import { ingredients, vegetables, proteins, users } from '../constants/data.js'
import IngredientsCard from './IngredientsCard.jsx'
import UsersCard from './UsersCard.jsx'
import SearchBar from './SearchBar.jsx'

function SearchUsers() {
    const [filteredData, setFilteredData] = useState(users);
    const user = users;

    const handleSearch = (query) => {
        const formattedQuery = query.toLowerCase();
        const filtered = user.filter(item => {
            return item.name.toLowerCase().includes(formattedQuery);
        });
        setFilteredData(filtered);
    };

    return(
    <SafeAreaView className="h-full bg-slate-900">
        <ScrollView>
            <Text className="text-2xl text-white font-extrabold mb-4 ml-20 px-2">Recommended Chefs</Text>
            <FlatList
                className="mb-8"
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
            <View style={{ flex: 1, alignItems: 'center' }}>
                <SearchBar placeholder={"Search User..."} onSearchSubmit={handleSearch} />
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}

export default SearchUsers;