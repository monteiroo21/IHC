import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading, image, imageStyles, imageColor }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.8}
            className={`bg-green-800 p-4 rounded-lg flex justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
            disabled={isLoading}
        >
            <Text className={`text-white text-center ${textStyles} text-4xl font-extrabold`}>{title}</Text>
            <Image source={image} resizeMode='contain' className={`${imageStyles}`} tintColor={`${imageColor}`} />
        </TouchableOpacity>
    )
}

export default CustomButton