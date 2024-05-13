import { View, Text, TouchableOpacity, Image, Alert, TextInput } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants/icons';

const SearchBar = ({ placeholder, onSearchSubmit }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchSubmit = () => {
        if (searchQuery.trim()) {
            onSearchSubmit(searchQuery);
        }
    };

    return (
        <View className='flex flex-row items-center space-x-4 w-5/6 h-16 px-4 bg-black-100 rounded-2xl border-4 border-gray-400 focus:border-secondary'>
            <TextInput
                className='text-white mt-0.5 flex-1 text-base font-semibold'
                value={searchQuery}
                placeholder={placeholder}
                placeholderTextColor="#fff"
                onChangeText={(e) => setSearchQuery(e)}
            />

            <TouchableOpacity onPress={handleSearchSubmit}>
                <Image source={icons.searchBold} tintColor={"#fff"} className="w-5 h-5" resizeMode='contain' />
            </TouchableOpacity>
        </View>
    )
};

export default SearchBar;