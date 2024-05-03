import React from 'react';
import { View, Text, Image } from 'react-native';
import Stars from './Stars';
import { StyleSheet } from 'react-native';

const Card = ({ title, user, image, rating }) => {
    return (
        <View className="flex-col items-center px-4">
            <Image source={image} className="w-72 h-56 rounded-xl relative" />
            <View style={{ backgroundColor: 'rgba(71, 85, 105, 0.65)' }} className="absolute mt-36 rounded-b-xl bg-slate-500 top-1">
                <Text className="text-white left-5 text-xl font-bold w-72">
                    {title}
                </Text>
                <Text className="text-white left-5 text-sm font-bold">
                    {user}
                </Text>
                <View className="flex-row left-5">
                    <Text className="text-white text-lg font-bold pr-2">
                        {rating}
                    </Text>
                    <Stars value={rating} />
                </View>
            </View>
        </View>
    );
};

export default Card;