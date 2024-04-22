import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.8}
            className={`bg-green-800 p-4 rounded-lg ${containerStyles} ? ${isLoading ? 'opacity-50' : ''}`}
            disabled={isLoading}
        >
            <Text className={`text-white text-center ${textStyles}`}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton