import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Stars from './Stars';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

const CardStandart = ({ title, user, image, rating, ingredients, steps, time, description, type = undefined }) => {
    const imagem = () => {
        return type === undefined ? <Image source={image} className="w-36 h-60 rounded-xl" /> : <Image source={{ uri: image }} className="w-36 h-60 rounded-xl" />
    };

    const handlePress = async () => {
        try {
            await AsyncStorage.setItem('recipe', JSON.stringify({ title, user, image, rating, ingredients, steps, time, description }));
            router.push('../Screens/recipeScreen', { title, user, image, rating, ingredients, steps, time, description });
        } catch (error) {
            console.error('Error saving recipe:', error);
        }
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View className="flex-col items-center px-4 relative">
                {imagem()}
                <View style={{ backgroundColor: 'rgba(71, 85, 105, 0.65)' }} className="absolute bottom-0 left-0 right-0 rounded-b-xl bg-slate-500 w-36 ml-4">
                    <Text className="text-white text-sm font-extrabold px-3 w-36 truncate">
                        {title}
                    </Text>
                    <Text className="text-white text-xs font-bold px-3 truncate">
                        {user}
                    </Text>
                    <View className="flex-row items-center px-3">
                        <Text className="text-white text-sm font-bold pr-1">
                            {rating}
                        </Text>
                        <Stars value={rating} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default CardStandart;
