import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ButtonStandart = ({ title, handlePress, isLoading, containerStyles, textStyles }) => {
    return (
        <View>
            <TouchableOpacity
                onPress={handlePress}
                activeOpacity={0.8}
                className={`bg-green-800 p-2 rounded-lg flex justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
                disabled={isLoading}
            >
                <Text className={`text-center ${textStyles}`}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonStandart