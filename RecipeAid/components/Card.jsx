import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Stars from './Stars';
import { StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import RecipeScreen from './recipeScreen';

const Card = ({ title, user, image, rating }) => {
    const navigation = useNavigation();
    
    return (
        <TouchableOpacity onPress={() => navigation.navigate('RecipeScreen')}>
            <View className="flex-col items-center px-4">
                <Image source={image} className="w-72 h-56 rounded-xl relative" />
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