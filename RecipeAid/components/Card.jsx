import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Stars from './Stars';
import { StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import RecipeScreen from '../app/Screens/recipeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { savedRecipes } from '../constants/data';

const Card = ({ title, user, image, rating, ingredients, steps, time, description, type = undefined }) => {
    const handlePress = async () => {
        try {
            await AsyncStorage.setItem('recipe', JSON.stringify({ title, user, image, rating, ingredients, steps, time, description, type }));
            router.push('../Screens/recipeScreen', { title, user, image, rating, ingredients, steps, time, description });
        } catch (error) {
            console.error('Error saving recipe:', error);
        }
    };

    const imagem = () => {
        return type === undefined ? <Image source={image} className="w-72 h-56 rounded-xl relative" /> : <Image source={{ uri: image }} className="w-72 h-56 rounded-xl relative" />
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View className="flex-col items-center px-4">
                {imagem()}
                <View style={{ backgroundColor: 'rgba(71, 85, 105, 0.65)' }} className="absolute mt-36 rounded-b-xl bg-slate-500 top-3">
                    <Text className="text-white left-3 text-xl font-bold w-72">
                        {title}
                    </Text>
                    <Text className="text-white left-3 text-sm font-bold">
                        {user}
                    </Text>
                    <View className="flex-row left-3">
                        <Text className="text-white text-sm font-bold pr-2 bottom-0.5">
                            {rating}
                        </Text>
                        <Stars value={rating} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default Card;