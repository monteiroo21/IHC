import React from 'react';
import { View, Text, Image } from 'react-native';

const Card = ({ title, user, image }) => {
    return (
        <View className="flex-col items-center px-4 mb-14">
            <Image source={image} className="w-72 h-56 rounded-xl relative" />
            <View className="absolute mt-36 left-10">
                <Text className="text-white text-xl font-bold">
                    {title}
                </Text>
                <Text className="text-white text-lg font-bold">
                    {user}
                </Text>
            </View>
        </View>
    );
};

export default Card;