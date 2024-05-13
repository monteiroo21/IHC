import { View, Text, Touchable, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

const CategoryButton = ({ category, image }) => {
    const handlePress = async () => {
        try {
            await AsyncStorage.setItem('category', category);
            router.push('../Screens/categoryScreen', { category });
        } catch (error) {
            console.error('Error saving recipe:', error);
        }
    };

    return (
        <TouchableOpacity className="justify-center items-center"
            style={{ margin: 5 }} onPress={handlePress}
        >
            <Image source={image} className="w-40 h-32 rounded-xl relative" resizeMode='cover' />
            <View className="absolute justify-center items-center">
                <Text className="text-white text-xl font-bold">
                    {category}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default CategoryButton