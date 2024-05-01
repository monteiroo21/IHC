import { View, Text, Touchable, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryButton = ({category, image}) => {
    return (
        <TouchableOpacity>
            <Image source={image} className="w-40 h-40 rounded-xl relative" />
            <View className="absolute mt-20 left-10">
                <Text className="text-white text-xl font-bold w-72">
                    {category}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default CategoryButton