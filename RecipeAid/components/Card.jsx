import React from 'react';
import { View, Text, Image } from 'react-native';

const Card = ({ title, user, image }) => {
    return (
        <View className="flex-col items-center px-4">
            <Image source={image} className="w-72 h-52 rounded-xl relative" />
            <View className="absolute mt-36 left-10">
                <Text className="text-white text-xl font-bold w-72">
                    {title}
                </Text>
                <Text className="text-white text-sm font-bold">
                    {user}
                </Text>
            </View>
        </View>
    );
};

export default Card;