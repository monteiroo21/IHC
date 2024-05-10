import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ placeholder }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (query) => {
        setSearchQuery(query);
        // Add additional actions like API calls or state updates here
    };

    return (
        <View className='p-4'>
            <TextInput
                style={styles.input}
                onChangeText={handleSearchChange}
                value={searchQuery}
                placeholder={placeholder}
                placeholderTextColor="#9CA3AF"
            />
        </View>
    );
};

export default SearchBar