import React from 'react';
import { View, Text, Image } from 'react-native';
import Stars from './Stars';
import { StyleSheet } from 'react-native';

const Card = ({ title, user, image, rating }) => {
    return (
        <View className="flex-col items-center px-4">
            <Image source={image} className="w-72 h-56 rounded-xl relative" />
            <View className="absolute mt-36 left-10">
                <Text className="text-white text-xl font-bold w-72">
                    {title}
                </Text>
                <Text className="text-white text-sm font-bold">
                    {user}
                </Text>
                <View className="z-0">
                    <Text className="text-white text-sm font-bold">
                        {rating}
                        <Stars value={rating} className="z-0 start-2" />
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default Card;