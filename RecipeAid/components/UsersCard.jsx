import { View, Text, Image } from 'react-native';
import React from 'react';
import Stars from './Stars';

const UsersCard = ({ title, user, image, rating, name }) => {
    return (
        <View className="flex-col items-center px-4 relative">
            <Image source={image} className="w-36 h-60 rounded-xl" />
            <View className="absolute bottom-0 left-0 right-0 rounded-b-xl w-36 ml-4">
                <Text className="text-white text-sm font-extrabold px-3 py-2 w-36 truncate">
                    {name}
                </Text>
            </View>
        </View>
    );
};

export default UsersCard;