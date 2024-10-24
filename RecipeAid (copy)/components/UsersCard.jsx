import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Stars from './Stars';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { recipes } from '../constants/data';

const UsersCard = ({ image, name }) => {
    const handlePress = async () => {
        try {
            await AsyncStorage.setItem('user', JSON.stringify({ image, name }));
            router.push('../Screens/userScreen', { image, name });
        } catch (error) {
            console.error('Error saving user:', error);
        }
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View className="flex-col items-center px-4 relative">
                <Image source={image} className="w-36 h-60 rounded-xl" />
                <View className="absolute bottom-0 left-0 right-0 rounded-b-xl w-36 ml-4">
                    <Text className="text-white text-sm font-extrabold px-3 py-2 w-36 truncate">
                        {name}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default UsersCard;