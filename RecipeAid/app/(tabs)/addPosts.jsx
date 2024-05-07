import { View, Text, ScrollView, FlatList, TouchableOpacity, Animated, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import { icons } from '../../constants/icons'
import Card from '../../components/Card'
import { recipesImages } from '../../constants/recipesJS'
import { recipes, myRecipes, savedRecipes } from '../../constants/data';
import { router } from 'expo-router';
import CardStandart from '../../components/CardStandart'

const addButton = ({ icon, color, name }) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image source={icon} resizeMode='contain' tintColor={color} className="w-7 h-7" />
            <Text className="text-lg" style={{ color: color }}>
                {name}
            </Text>
        </View>
    )
}

const addPosts = () => {
    const myLastRecipes = myRecipes.slice(-2);

    return (
        <SafeAreaView className="h-full bg-slate-900">
            <ScrollView>
                <View>
                    <Text className="text-3xl text-lime-500 font-extrabold text-center mb-5 mt-2">Last posted recipes</Text>
                </View>

                <View className="flex items-center">
                    <View className="flex-row justify-between px-4">
                        {myLastRecipes.map((item, index) => (
                            <CardStandart
                                key={index}
                                title={item.title}
                                user={item.user}
                                image={item.image}
                                rating={item.rating}
                            />
                        ))}
                    </View>
                </View>

                <View className="justify-center items-center mt-8">
                    <TouchableOpacity onPress={() => router.push('/profile')}>
                        <View>
                            <View className="flex-row items-center justify-center bg-slate-900 rounded-xl border-2 border-white p-5 mt-4">
                                {addButton({
                                    icon: icons.post,
                                    color: '#fff',
                                    name: 'Add a new Recipe'
                                })}
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default addPosts