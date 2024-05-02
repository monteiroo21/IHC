import { View, Text, Touchable, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryButton = ({ category, image }) => {
    return (
        <TouchableOpacity className="justify-center items-center"
            style={{ margin: 5 }}
        >
            <Image source={image} className="w-40 h-32 rounded-xl relative" resizeMode='cover' />
            <View className="absolute justify-center items-center">
                <Text className="text-white text-xl font-bold">
                    {category}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default CategoryButton