import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import SearchBar from './SearchBar'; // make sure the path is correct
import { users } from '../constants/data';

const SearchScreen = () => {
    const [filteredData, setFilteredData] = useState(data);

    const handleSearch = (query) => {
        const formattedQuery = query.toLowerCase();
        const filtered = users.filter(item => {
            return item.name.toLowerCase().includes(formattedQuery);
        });
        setFilteredData(filtered);
    };

    return (
        <View style={{ flex: 1, padding: 10 }}>
            <SearchBar placeholder="Search..." onSearchSubmit={handleSearch} />
            <FlatList
                data={filteredData}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <Text>{item.name}</Text>}
            />
        </View>
    );
};

export default SearchScreen;