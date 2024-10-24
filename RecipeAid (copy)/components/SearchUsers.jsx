import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, ScrollView, FlatList } from 'react-native'
import { ingredients, vegetables, proteins, users } from '../constants/data.js'
import IngredientsCard from './IngredientsCard.jsx'
import UsersCard from './UsersCard.jsx'
import SearchBar from './SearchBar.jsx'

function SearchUsers() {
    const [filteredData, setFilteredData] = useState([]);
    const [showRecommended, setShowRecommended] = useState(true);
    const user = users.slice(0, 3);

    const handleSearch = (query) => {
        if (query.trim() === '') {
            setShowRecommended(true);
            setFilteredData([]);  // Reset to full list when query is cleared
        } else {
            const formattedQuery = query.toLowerCase();
            const filtered = users.filter(item => item.name.toLowerCase().includes(formattedQuery));
            setFilteredData(filtered);
            setShowRecommended(false);  // Hide recommended users when filtering
        }
    };

    return (
        <SafeAreaView className="h-full bg-slate-900">
            <ScrollView>
                {showRecommended && (
                    <View>
                        <View className="justify-center items-center">
                            <Text className="text-2xl text-white font-extrabold mb-4 px-2">Recommended Chefs</Text>

                        </View>
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
                    </View>
                )}
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <SearchBar placeholder={"Search User..."} onSearchSubmit={handleSearch} />
                </View>
                <FlatList
                    className="mt-6"
                    data={filteredData}
                    keyExtractor={item => item.id}
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